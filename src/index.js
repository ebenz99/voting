import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import StepMatrix from './components/StepMatrix/StepMatrix';
import Header from './components/Header/Header';
import * as serviceWorker from './serviceWorker';
import './fonts/Roboto-Regular.ttf'
import './images/scflag.svg'


ReactDOM.render(
  <React.StrictMode>
    <Header/>
  </React.StrictMode>,
  document.getElementById('splash')
);


ReactDOM.render(
  <React.StrictMode>
    <StepMatrix/>
  </React.StrictMode>,
  document.getElementById('root')
);





// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
