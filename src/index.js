import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import StepMatrix from './components/StepMatrix/StepMatrix';
import Step from './components/Step/Step';
import Arrow from './components/Arrow/Arrow';
import Header from './components/Header/Header';

import * as serviceWorker from './serviceWorker';
import './fonts/Roboto-Regular.ttf';
import './fonts/Roboto-Bold.ttf';
import './images/scflag.svg';


// require('./components/Arrow/images/yesArrow.svg');


ReactDOM.render(
  <React.StrictMode>
    <Header text="Let's vote!"/>
  </React.StrictMode>,
  document.getElementById('splash')
);


ReactDOM.render(
  <React.StrictMode>
    <h1 id="step-heading">How to Vote</h1>
    <Step name={'Are you registered?'} description={"The first step in voting is getting registered. Click here to check if you're registered to vote in SC!"} url='https://info.scvotes.sc.gov/eng/voterinquiry/VoterInformationRequest.aspx?PageMode=VoterInfo' ml='13vw' mt='7vh'/>
    <Step name={'Register'} description={'Good news--you can register online and it takes less than 5 mins! (Deadline is October 4th)'} url='https://google.com' ml='20vw' mt='9vh'/>
    <Step name={'How do you want to vote?'} description={'Most people choose to vote either by mail (absentee) on in person. For more information on voting options, click here.'} url='https://https://www.scvotes.gov/' ml='30vw' mt='15vh'/>
    <Step name={'Absentee'} description={"Request your ballot soon! Your completed ballot must be recieved by November 3rd"} url='https://google.com' ml='11vw' mt='20vh'/>
    <Step name={'VOTE!'} description={"You're all set! Remember to vote!"} url='https://google.com' ml='19vw' mt='33vh'/>

    <Arrow fileName="./images/firstArrow.svg" w="10vw" h="20vh" ml="4vw" mt="0vh"/>
    <Arrow fileName="./images/yesArrow.svg" w="100vw" h="16vh" ml="33vw" mt="33vh"/>
    <Arrow fileName="./images/noArrow.svg" w="20vw" h="100vh" ml="43vw" mt="18vh"/>
    <Arrow fileName="./images/registeredArrow.svg" w="100vw" h="16vh" ml="55vw" mt="33vh"/>
    <Arrow fileName="./images/inPersonArrow.svg" w="50vw" h="33vh" ml="60vw" mt="73vh"/>
    <Arrow fileName="./images/absenteeArrow.svg" w="100vw" h="20vh" ml="30vw" mt="74vh"/>
    <Arrow fileName="./images/sentArrow.svg" w="19vw" h="20vh" ml="41vw" mt="103vh"/>


    <div style={{marginTop:"13vh", marginLeft:"51vw"}} class ='resp'>No</div>
    <div style={{marginTop:"37vh", marginLeft:"31vw"}} class ='resp'>Yes</div>
    <div style={{marginTop:"39vh", marginLeft:"64vw"}} class ='resp'>Registered!</div>
    <div style={{marginTop:"80vh", marginLeft:"23vw"}} class ='resp'>Absentee</div>
    <div style={{marginTop:"80vh", marginLeft:"66vw"}} class ='resp'>In-person</div>
  </React.StrictMode>,
  document.getElementById('root')
);

// const stepNames = ["Check Registration", 'Register Online', 'Request an Absentee Ballot', 'More2'];
// const descriptions = ["If you're not sure if you're already registered to vote in SC, click here","Deadline: October 4th", "Request by Oct 5th to guarantee delivery by election day",'This is rad!']
// const urls = ['https://info.scvotes.sc.gov/eng/voterinquiry/VoterInformationRequest.aspx?PageMode=VoterInfo', 'https://info.scvotes.sc.gov/eng/ovr/start.aspx', 'https://info.scvotes.sc.gov/eng/voterinquiry/VoterInformationRequest.aspx?PageMode=AbsenteeRequest', 'https://www.ethanbensman.com'];
// const items = []


// <StepMatrix/>

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
