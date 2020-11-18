import React, { Component } from 'react';


export default class WorkingWithState extends Component {
    constructor() {
        super()
        this.state = {
            count: 0
        }
        this.onPositiveChange = this.onPositiveChange.bind(this)
        this.onnegativeChange = this.onnegativeChange.bind(this)
    }

    onPositiveChange() {
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            }
        })
    }

    onnegativeChange() {
        this.setState((prevState) => {
            if (prevState.count === 0) {
                return {
                    count: 0
                }
            } else {
                return {
                    count: prevState.count - 1
                }
            }
        })
    }

    render() {

        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.onPositiveChange}>+1</button>
                <button onClick={this.onnegativeChange}>-1</button>
            </div>
        )

    }
} 