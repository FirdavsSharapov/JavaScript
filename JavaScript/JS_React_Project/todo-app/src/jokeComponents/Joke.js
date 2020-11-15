import React from 'react';

export default function Joke(props) {
    return (
        <div>
            <h1 style={{ display: props.question ? "block" : "none" }}>Question: {props.question}</h1>
            <p>Punch Line: {props.punchLine}</p>
        </div>
    )
}