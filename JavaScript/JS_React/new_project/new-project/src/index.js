import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
// import MainContent from './components/MainContent';
import ContactCard from './components/ContactCard';
import TimeOfDay from './components/TimeOfDay';
import App from './App';
import JokeApp from './JokeApp';

ReactDOM.render(
  <React.StrictMode>
     <JokeApp/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
