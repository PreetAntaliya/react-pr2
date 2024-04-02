import React, { useState, Component } from 'react';
import './counter.css'

function FunctionCounter() {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    };
    const reset = () => {
        setCount(0);
    };

    return (
        <div align="center">
            <h1 className='counter_title'>counter app using function component</h1>
            <div className='counter'>
                <button onClick={increment}>+</button>
                <h1>{count}</h1>
                <button onClick={decrement}>-</button>
            </div>
            <div className='reset_btn'>
                <button onClick={reset}>Reset</button>
            </div>
        </div>
    );
}

// Class Component Counter
class ClassCounter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }

    increment = () => {
        this.setState({ count: this.state.count + 1 });
    };

    decrement = () => {
        if (this.state.count > 0) {
            this.setState({ count: this.state.count - 1 });
        }
    };

    reset = () => {
        this.setState({ count: 0 });
    };

    render() {
        return (
            <div align="center">
                <h1 className='counter_title'>counter app using class component</h1>
                <div className='counter'>
                    <button onClick={this.increment}>+</button>
                    <h1>{this.state.count}</h1>
                    <button onClick={this.decrement}>-</button>
                </div>
                <div className='reset_btn'>
                    <button onClick={this.reset}>Reset</button>
                </div>
            </div>
        );
    }
}

export { FunctionCounter, ClassCounter };

