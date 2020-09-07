import React from 'react';
import ReactDOM from 'react-dom';
import './style/style.css';
import App from './components/App';
import TimePredictor from './components/TimePredictor';
import ReComponent from './components/ReComponent';
import * as serviceWorker from './serviceWorker';


ReactDOM.render(
  <React.StrictMode>
    {/* <TimePredictor /> */}
    {/* <App /> */}
    <ReComponent 
      name = "Kuzya"
      phone = "3475694314"
      email = "kuzya@gmail.com"
      img = "http://placekitten.com/300/200"
    />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
