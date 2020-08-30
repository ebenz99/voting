import React, { Component } from 'react';
import './Step.css';

class Step extends Component {
  constructor(props) {
    super(props);
    this.name = props.name;
    this.description = props.description;
    this.url = props.url;
  }

  // open page then populating URL should dodge pop-up blockers
  openPage(url) {
    const newWindow = window.open();
    newWindow.location.href = url;
  }

  // necessary for accessing class URL property within render sub-functions
  getURL(){
    return this.url;
  }

  render() {
    return (
      <div onClick={() => this.openPage(this.getURL())} className="card-holder">
        <div class="card">
          <div class="card-head">
            <p class="card-head-text"> {this.name} </p>
          </div>
          <div class="card-body">
            <p class="card-body-text"> {this.description} </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Step;
