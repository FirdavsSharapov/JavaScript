import React, { Component } from 'react';

export default class App extends Component {
    constructor() {
        super()
        this.state = {}
    }
    render() {
        function handleClick() {
            console.log('I was clicked')
        }
        return (
            <div>
                <img src="https://www.fillmurray.com/200/100" alt='' onMouseOver={handleClick} />
                <br />
                <br />
                <button onClick={handleClick}>Click Me!</button>
            </div>
        )
    }
}