import React from 'react';
import StateGlobal from './StateGlobal';

function Joke(props) {
    return (
        <div>
            <h1>Question: {props.question} </h1>
            <h1>Punch Line: {props.punchLine}</h1>
        </div>
    );
};

export default Joke;