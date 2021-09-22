import React from 'react';
import Joke from './components/Joke';
import jokesData from './data/jokesData';

export default function JokeApp() {
    const JokesComponent = jokesData.map(joke => {
        return (
            <Joke
                key={joke.id}
                question={joke.question}
                answer={joke.punchLine} />
                )
    })
    return (<div>
        {JokesComponent}
    </div>
    )
}