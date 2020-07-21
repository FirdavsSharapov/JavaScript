// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class Message extends Component {
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
  powder: 20,
  backcountry: 10,
  goal: 100
}

const getPercent = decimal => {
  return decimal * 100 + '%'
}

const calcGoalProgress = (total, goal) => { return getPercent(total / goal) }

// function 
const SkiDayCounter = (props) => {
  return (
    <section>
      <h2>Ski Days</h2>
      <div>
        <p>Total Days: {props.total}</p>
      </div>
      <div>
        <p>Powder Days: {props.powder}</p>
      </div>
      <div>
        <p>Backcountry Days: {props.backcountry}</p>
      </div>
      <div>
        <p>Goal Progress: {calcGoalProgress(props.total, props.goal)}</p>
      </div>
    </section>
  )
}

// class SkiDayCounter extends Component {
//   // Creating custom method



//   render() {
//     const { total, powder, backcountry, goal } = this.props
//     return (

//     )
//   }
// }

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