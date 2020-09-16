import React from 'react';

// https://scrimba.com/p/p4Mrt9/cQnMDHD

class StateGlobal extends React.Component {
    constructor() {
        super();
        this.state = {
            answer: 'Yes',
            question: 'Are you willing to land money?'
        };
    };
    render() {
        return (
            <div>
                <h1>Is state important to know? {this.state.answer}</h1>
                <p>Do you have any question?</p>
                <p>{this.state.question}</p>
            </div>
        );
    };
};

export default StateGlobal;