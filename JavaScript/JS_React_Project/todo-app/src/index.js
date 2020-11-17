import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import App2 from './classComponents/App'
import reportWebVitals from './reportWebVitals';
// import MyInfo from './MyInfo';
// import MainContent from './MainContent';
// import HourReminder from './HourReminder';
// import ContactCard from './contactCard/App';
// import JokeCards from './jokeComponents/App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
