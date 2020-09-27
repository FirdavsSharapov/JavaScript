import React, { Children } from 'react';
import { render } from 'react-dom';
import Joke from './Joke';


// if you want to explore more about event handling then you can go 
// https://reactjs.org/docs/events.html#supported-events


class EventHandlerElements extends React.Component {
    constructor() {
        super();
        this.state = {
            count: 0
        };
        this.increaseValue = this.increaseValue.bind(this);
        this.decreaseValue = this.decreaseValue.bind(this);
    };

    // changing previous state and allow to pass state value across the JS
    increaseValue() {
        this.setState(prevState => {
            return {
                count: prevState.count + 1
            }
        })

    };

    decreaseValue() {
        this.setState(prevState => {
            return {
                count: prevState.count - 1
            }
        })
    };


    render() {
        return (
            <div>
                <img src="https://www.fillmurray.com/200/100" />
                <br />
                <h1>{this.state.count}</h1>
                <button onClick={this.increaseValue}>Add number</button>
                <button onClick={this.decreaseValue}>Deduct number</button>
                <Joke question={this.state.count} punchLine={0 - this.state.count} />
            </div>
        );
    };
};


// class EventHandlerElements extends React.Component {
//     constructor() {
//         super();
//         this.state = {
//             count: 0
//         };
//         this.onChangeHandler = this.onChangeHandler.bind(this)
//     };
//     onChangeHandler() {
//         this.state(prevState => {
//             return {
//                 cout: prevState.count + 1
//             };
//         }
//         )
//     }
//     render() {
//         return (
//             <div>
//                 <h1>{this.state.count}</h1>
//                 <button onChange={onChangeHandler}>Increase</button>
//             </div>
//         )
//     }
// };

export default EventHandlerElements;