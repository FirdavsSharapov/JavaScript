import React from 'react';
import StateGlobal from './components/StateGlobal';

function Joke(props) {
    return (
        <div>
            <h1>Question: {props.question} </h1>
            <h1>Punch Line: {StateGlobal.state.answer}</h1>
        </div>
    );
};

export default Joke;