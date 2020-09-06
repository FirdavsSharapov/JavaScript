// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
// to start React server you have to run this command: go to the working folder and 
// run npm start

import React, { Component } from 'react'
import { render } from 'react-dom'

// //Array of data
// let bookList = [
//   { "title": "The Sun Also Rises", "author": "Earnest Hamingaway", "pages": 260 },
//   { "title": "White teeth", "author": "Zadie Smith", "pages": 480 },
//   { "title": "Cat's Crandle", "author": "Kurt Vonnegut", "pages": 304 },
//   { "title": "Cat's Crandle", "author": "Kurt Vonnegut", "pages": 304 },
// ]


// // Props and State
// const Book = ({ title, author, pages, freeBookmark }) => {
//   return (
//     <section>
//       <h2>{title}</h2>
//       <p>By: {author}</p>
//       <p>Pages: {pages}</p>
//       <p>Free bookmark Today: {freeBookmark ? "yes" : 'no'}</p>
//     </section>
//   )
// }

// // Function components
// const Hiring = () => <div>Hiring!</div>
// const NotHiring = () => <div>Not Hiring!</div>

// // adding the key 
// class Library extends React.Component {
//   state = {
//     open: true,
//     freeBookmark: true,
//     hiring: true
//   }

//   toggleOpenClose = () => {
//     this.setState({ open: !this.state.open })
//     this.setState({ hiring: !this.state.hiring })
//   }
//   render() {
//     console.log(this.state)
//     const { books } = this.props
//     return (
//       <div>
//         {this.state.hiring ? <Hiring/> : <NotHiring/>}
//         <h1>Library is {this.state.open ? 'Open' : 'Closed'}</h1>
//         <button onClick={this.toggleOpenClose}>Change</button>
//         {books.map(
//           (book, i) =>
//             <Book
//               key={i}
//               title={book.title}
//               author={book.author}
//               pages={book.pages}
//               freeBookmark={this.state.freeBookmark}
//             />
//         )
//         }
//       </div>
//     )
//   }
// }


// Reusable functional components in React
// function MyApp(){
//  return (
//    <ul>
//      <li>1</li>
//      <li>2</li>
//      <li>3</li>
//    </ul>
//  )
// }

// function MyInfo(){
//   return(
//   <div>
//     <h1>My info</h1>
//     <p>My name is Fred and I'm learning React in this course</p>
//     <p>This is a list where I want to go</p>
//     <ul>
//       <li>Brasil</li>
//       <li>Australia</li>
//       <li>Europe</li>
//     </ul>
//   </div>
//   )
// }

import MyInfo from "./components/MyInfo.js"
render(
  <MyInfo />,
  document.getElementById('root')
)




// class Message extends Component {
//   render() {
//     console.log(this.props)
//     return (
//       <div style={{ color: this.props.color }}>
//         <h1>{this.props.msg}</h1>
//         <p>age = {this.props.age}</p>
//       </div>
//     )
//   }
// }

// let skiData = {
//   total: 50,
//   powder: 20,
//   backcountry: 10,
//   goal: 100
// }

// const getPercent = decimal => {
//   return decimal * 100 + '%'
// }

// const calcGoalProgress = (total, goal) => { return getPercent(total / goal) }

// // function 
// const SkiDayCounter = (props) => {
//   return (
//     <section>
//       <h2>Ski Days</h2>
//       <div>
//         <p>Total Days: {props.total}</p>
//       </div>
//       <div>
//         <p>Powder Days: {props.powder}</p>
//       </div>
//       <div>
//         <p>Backcountry Days: {props.backcountry}</p>
//       </div>
//       <div>
//         <p>Goal Progress: {calcGoalProgress(props.total, props.goal)}</p>
//       </div>
//     </section>
//   )
// }

// // class SkiDayCounter extends Component {
// //   // Creating custom method



// //   render() {
// //     const { total, powder, backcountry, goal } = this.props
// //     return (

// //     )
// //   }
// // }

// ReactDOM.render(
//   // <Message age={50} msg="how are you?" color ="blue"/>
//   <SkiDayCounter
//     total={skiData.total}
//     powder={skiData.powder}
//     backcountry={skiData.backcountry}
//     goal={skiData.backcountry}
//   />,
//   document.getElementById('root')
// )