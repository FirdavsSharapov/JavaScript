import React, { Component } from 'react';

export default class InfoCardComponent extends Component {
    constructor() {
        super()
        this.state = {
            name: 'Fred Sharapov',
            age: 38,
        }
    }
    render() {
        return (
            <div>
                <h1>Name: {this.props.name}</h1>
                <h1>Age: {this.state.age}</h1>
            </div>
        )
    }
}