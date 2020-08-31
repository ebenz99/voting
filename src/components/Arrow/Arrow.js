import React, { Component } from 'react';
import './Arrow.css';


class Arrow extends Component {
  constructor(props) {
    super(props);
    const arrowImg = require(`${props.fileName}`);
    this.arrowState = {
      backgroundImage: `url("${arrowImg}")`,
      marginLeft: props.ml,
      marginTop: props.mt,
      width: props.w,
      height:  props.h,
    };
  }

  render() {
    return (
      <div style={this.arrowState} class="arrow"></div>
    );
  }
}

export default Arrow;
