import React from 'react';

function Joke(props) {
    return (
        <div>
            <h1>Question: {props.question} </h1>
            <h1>Punch Line: {props.answer}</h1>
        </div>
    );
};

export default Joke;