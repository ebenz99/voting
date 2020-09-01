import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import Step from './components/Step/Step';
import Arrow from './components/Arrow/Arrow';
import Header from './components/Header/Header';
import Label from './components/Label/Label';

import * as serviceWorker from './serviceWorker';
import './fonts/Roboto-Regular.ttf';
import './fonts/Roboto-Bold.ttf';
import './images/scflag.svg';



ReactDOM.render(
  <React.StrictMode>
    <Header text="Let's vote!"/>
  </React.StrictMode>,
  document.getElementById('splash')
);

const state = { }
if (window.outerWidth < 600) {
  state.mobile = true;
}

ReactDOM.render(
  <React.StrictMode>
    <h1 id="step-heading">How to Vote</h1>
    <Step name={'Are you registered?'} description={"The first step in voting is getting registered. Click here to check if you're registered to vote in SC!"} url='https://info.scvotes.sc.gov/eng/voterinquiry/VoterInformationRequest.aspx?PageMode=VoterInfo' ml='13vw' mt='7vh' mobile={state.mobile}/>
    <Step name={'Register'} description={'Good news--you can register online and it takes less than 5 mins! The deadline is October 4th.'} url='https://info.scvotes.sc.gov/eng/ovr/start.aspx' ml='20vw' mt='9vh' mobile={state.mobile}/>
    <Step name={'How do you want to vote?'} description={'Most people choose to vote either by mail (absentee) or in person. For more information on voting options, click here.'} url='https://www.scvotes.gov/' ml='30vw' mt='15vh' mobile={state.mobile}/>
    <Step name={'If Absentee'} description={"Apply for an absentee ballot soon by clicking here! If your application is submitted by October 20th, you'll receive your ballot in the mail. "} url='https://info.scvotes.sc.gov/eng/voterinquiry/VoterInformationRequest.aspx?PageMode=AbsenteeRequest' ml='11vw' mt='20vh' mobile={state.mobile}/>
    <Step name={'VOTE!'} description={"You're all set! Remember to vote or turn in your absentee ballot by election day!"} url='https://scvotes.gov' ml='19vw' mt='33vh' mobile={state.mobile}/>

    <Arrow fileName="./images/firstArrow.svg" w="10vw" h="20vh" ml="4vw" mt="-7vh" mobile={state.mobile}/>
    <Arrow fileName="./images/yesArrow.svg" w="100vw" h="16vh" ml="33vw" mt="33vh" mobile={state.mobile}/>
    <Arrow fileName="./images/noArrow.svg" w="20vw" h="100vh" ml="43vw" mt="18vh" mobile={state.mobile}/>
    <Arrow fileName="./images/registeredArrow.svg" w="100vw" h="16vh" ml="55vw" mt="33vh" mobile={state.mobile}/>
    <Arrow fileName="./images/inPersonArrow.svg" w="50vw" h="33vh" ml="60vw" mt="73vh" mobile={state.mobile}/>
    <Arrow fileName="./images/absenteeArrow.svg" w="100vw" h="20vh" ml="30vw" mt="74vh" mobile={state.mobile}/>
    <Arrow fileName="./images/sentArrow.svg" w="19vw" h="20vh" ml="41vw" mt="103vh" mobile={state.mobile}/>

    <Label mt="13vh" ml="51vw" text="No" mobile={state.mobile}/>
    <Label mt="37vh" ml="31vw" text="Yes" mobile={state.mobile}/>
    <Label mt="39vh" ml="64vw" text="Registered!" mobile={state.mobile}/>
    <Label mt="80vh" ml="23vw" text="Absentee" mobile={state.mobile}/>
    <Label mt="80vh" ml="66vw" text="In-person" mobile={state.mobile}/>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
