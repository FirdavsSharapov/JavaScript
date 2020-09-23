import React from 'react';
import { render } from 'react-dom';


// if you want to explore more about event handling then you can go 
// https://reactjs.org/docs/events.html#supported-events


class EventHandlerElements extends React.Component {
    constructor() {
        super();
        this.state = {
            count: 0
        };
        this.handleTheMove = this.handleTheMove.bind(this);
    };

    handleTheMove() {
        this.setState(prevState => { return { count: 1 } })
    };

    render() {
        return (
            <div>
                <img src="https://www.fillmurray.com/200/100" />
                <br />
                <h1>{this.state.count}</h1>
                <button onClick={this.handleTheMove}>Click me</button>
            </div>
        );
    };
};

export default EventHandlerElements;