import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Step from './Step';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(

  <React.StrictMode>
    <Step name='register'/>
    <Step name='register'/>
    <Step name='register'/>
    <Step name='register'/>
  </React.StrictMode>,
  document.getElementById('root')
);




// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// const stepNames = ['Register', 'Register', 'register', 'register'];
// const items = []
//
// for (const [index, value] of elements.entries()) {
//   items.push(<li key={index}>{value}</li>)
// }
