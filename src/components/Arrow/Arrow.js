import React, { Component } from 'react';
import './Arrow.css';

class Arrow extends Component {
  constructor(props) {
    super(props);
    this.arrowFileName
    this.text = props.text;
    this.description = props.description;
    this.url = props.url;
    this.state = {
      marginLeft: props.ml,
      marginTop: props.mt
    };
  }

  render() {
    return (
      <div onClick={() => this.openPage(this.getURL())} style={this.state} className="card-holder">
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
