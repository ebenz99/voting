// DEPRACATED Component
// No longer in use, but of value

import React, { Component } from 'react';
import './StepMatrix.css';
import Step from '../Step/Step';

class StepMatrix extends Component {
  constructor(props) {
    super(props);
  }

  createCards(){
    const stepNames = ["Check Registration", 'Register Online', 'Request an Absentee Ballot', 'More2'];
    const descriptions = ["If you're not sure if you're already registered to vote in SC, click here","Deadline: October 4th", "Request by Oct 5th to guarantee delivery by election day",'This is rad!']
    const urls = ['https://info.scvotes.sc.gov/eng/voterinquiry/VoterInformationRequest.aspx?PageMode=VoterInfo', 'https://info.scvotes.sc.gov/eng/ovr/start.aspx', 'https://info.scvotes.sc.gov/eng/voterinquiry/VoterInformationRequest.aspx?PageMode=AbsenteeRequest', 'https://www.ethanbensman.com'];
    const items = []

    for (const [index, value] of stepNames.entries()) {
      items.push(<Step name={value} description={descriptions[index]} url={urls[index]} />);
      break;
    }
    return items;
  }

  render() {
    return (
      <div className='card-matrix'>
        { this.createCards() }
      </div>
    );
  }
}

export default StepMatrix;
