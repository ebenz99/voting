import Step from './Step';
import './StepMatrix.css';
import React, { Component } from 'react';

class StepMatrix extends Component {
  constructor(props) {
    super(props);
  }

  createCards(){
    const stepNames = ['Register', 'Absentee', 'More', 'More2'];
    const items = []

    for (const [index, value] of stepNames.entries()) {
      items.push(<Step name={value} />)
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
