import React, { Component } from 'react';
import './Label.css';


class Label extends Component {
  constructor(props) {
    super(props);
    this.text = props.text
    this.state = {
      marginLeft: props.ml,
      marginTop: props.mt
    };
    if (props.mobile){
      this.state.display = "none";
    }
  }

  render() {
    return (
      <div style={this.state} class="resp">{this.text}</div>
    );
  }
}

export default Label;
