import React, { Component } from 'react';
import logo from './logo.svg';
import './Step.css';

class Step extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShow: true,
    };
    this.name = props.name;
  }

  render() {
    return (
      <div className="card-holder">
        <div class="card">
          <div class="card-head">
            <p class="card-head-text"> {this.name} </p>
          </div>
          <div class="card-body">
            <p class="card-body-text"> Hello </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Step;
