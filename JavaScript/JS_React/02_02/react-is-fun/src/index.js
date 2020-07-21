// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
import React from 'react'
import ReactDOM from 'react-dom'


class Message extends React.Component {
  render() {
    console.log(this.props)
    return (
      <div style={{ color: this.props.color }}>
        <h1>{this.props.msg}</h1>
        <p>age = {this.props.age}</p>
      </div>
    )
  }
}


let skiData = {
  total: 50,
  posder: 20,
  backcountry: 10,
  goal: 100
}

class SkiDayCounter extends React.Component {
  render() {
    return (
      <section>
        <h2>Ski Days</h2>
        <div>
          <p>Total Days: {this.props.total}</p>
        </div>
        <div>
          <p>Powder Days: {this.props.powder}</p>
        </div>
        <div>
          <p>backcountry Days: {this.props.backcountry}</p>
        </div>
        <div>
          <p>Goal: {this.props.goal}</p>
        </div>
      </section>
    )
  }
}
// var style = {
//   backgroundColor: 'orange',
//   color: 'white',
// }



// const title = React.createElement('ul', { id: 'title', className: 'header', style: style },
//   React.createElement('li', {}, 'item on our list'))

ReactDOM.render(
  // <Message age={50} msg="how are you?" color ="blue"/>
  <SkiDayCounter
    total={skiData.total}
    powder={skiData.powder}
    backcountry={skiData.backcountry}
    goal={skiData.backcountry}
  />,
  document.getElementById('root')
)