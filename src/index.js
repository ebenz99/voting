import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import StepMatrix from './components/StepMatrix/StepMatrix';
import Header from './components/Header/Header';
import * as serviceWorker from './serviceWorker';
import './fonts/Roboto-Regular.ttf';
import './images/scflag.svg';
import './images/whiteArrow.svg';


ReactDOM.render(
  <React.StrictMode>
    <Header text="Let's vote!"/>
  </React.StrictMode>,
  document.getElementById('splash')
);


ReactDOM.render(
  <React.StrictMode>
    <h1 id="step-heading">How to Vote</h1>
    <StepMatrix/>
  </React.StrictMode>,
  document.getElementById('root')
);


// <div class="arrow"></div>


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
