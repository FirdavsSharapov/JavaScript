import React from 'react';
import Joke from './Joke';

export default function App() {
    return (
        <div>
            <Joke 
                question="What is your name?" 
                punchLine="something that you should know" 
            />
            <hr/>
            <Joke 
                
                punchLine="something that you should know" 
            />
        </div>
    )

}