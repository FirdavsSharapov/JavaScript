import React from 'react';
import Joke from './Joke';
import jokeData from './JokeData';

export default function App() {
    // Another way to write below function is 

    // const jokeContainer =jokeData.map(function(props) {
    //     return (
    //         <div>
    //         <Joke key={props.id} question={props.question} punchLine={props.punchLine} />
    //         <hr />
    //     </div>
    //     )
    // })

    const jokeContainer = jokeData.map((props) => (
        <div>
            <Joke key={props.id} question={props.question} punchLine={props.punchLine} />
            <hr />
        </div>
    ))
    console.log(jokeContainer)
    return (
        <div>
            {jokeContainer}
        </div>
    )

}