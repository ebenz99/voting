import React, { Component } from 'react';
import './StepMatrix.css';
import Step from './Step';

class StepMatrix extends Component {
  constructor(props) {
    super(props);
  }

  createCards(){
    const stepNames = ['Register', 'Absentee', 'More', 'More2'];
    const descriptions = ['Wow!','Neato!','Sweet!','This is rad!']
    const urls = ['https://www.google.com', 'https://www.bing.com', 'https://www.kia.com', 'https://www.ethanbensman.com'];
    const items = []

    for (const [index, value] of stepNames.entries()) {
      items.push(<Step name={value} description={descriptions[index]} url={urls[index]} />)
    }
    return items;
  }

  render() {
    return (
      <div class='card-matrix'>
        { this.createCards() }
      </div>
    );
  }
}

export default StepMatrix;
