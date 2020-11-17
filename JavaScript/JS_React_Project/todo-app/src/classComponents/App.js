import React, {Component} from 'react';
import InfoCardComponent from './InfoCardComponent';
import LoginComponent from './LoginComponent';

// State is immutable 
// State can be used only in Class based components 
// to declare the state we need to call constructor and super method 
// super method brind all functions and method from parent component into
// child component


export default class App extends Component {
    constructor(){
        super()
        this.state = {
            answer: "yes",
            name: "Fred Sharapov"
        }
    }

    render() {
        return (
            <div>
                <Header username={this.state.name} answer={this.state.answer}/>
                <Greetings name={this.state.name} />
                <InfoCardComponent name={this.state.name}/>
                <LoginComponent />
            </div>
        )
    }
}

class Header extends Component {
    render(){
        return (
            <header>
                <p>Welcome, {this.props.username}!</p>
                <p>Did you reach this from the state? {this.props.answer}</p>
            </header>
        )
    }
}

class Greetings extends Component {
    render() {
        const date = new Date();
        const hours = date.getHours();
        let timeOfDay

        if (hours < 12) {
            timeOfDay = "morning";
        } else if (hours >= 12 && hours < 17) {
            timeOfDay = "afternoon";
        } else {
            timeOfDay = "night";
        }
        return (<h1>Good {timeOfDay}, {this.props.name}!</h1>)
    }
}
