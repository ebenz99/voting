import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import StepMatrix from './components/StepMatrix/StepMatrix';
import Step from './components/Step/Step';
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
    <div class="firstArrow"></div>
    <Step name={'hi'} description={'testing'} url='https://google.com' ml='13vw' mt='7vh'/>
    <div class="noArrow"></div>
    <Step name={'hi'} description={'testing'} url='https://google.com' ml='20vw' mt='9vh'/>
  </React.StrictMode>,
  document.getElementById('root')
);

const stepNames = ["Check Registration", 'Register Online', 'Request an Absentee Ballot', 'More2'];
const descriptions = ["If you're not sure if you're already registered to vote in SC, click here","Deadline: October 4th", "Request by Oct 5th to guarantee delivery by election day",'This is rad!']
const urls = ['https://info.scvotes.sc.gov/eng/voterinquiry/VoterInformationRequest.aspx?PageMode=VoterInfo', 'https://info.scvotes.sc.gov/eng/ovr/start.aspx', 'https://info.scvotes.sc.gov/eng/voterinquiry/VoterInformationRequest.aspx?PageMode=AbsenteeRequest', 'https://www.ethanbensman.com'];
const items = []


// <StepMatrix/>

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
