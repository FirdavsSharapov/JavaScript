import React from 'react';

export default function Joke(props) {
    return (
        <div>
            <h1 style={{ display: !props.question && "none" }}>Question: {props.question}</h1>
            <h1>Answer: {props.answer}</h1>
        </div>
    );
}