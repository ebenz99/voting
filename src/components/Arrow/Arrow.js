// UNUSED Component
// IN THE WORKS TO MAKE THIS WORK

// want to be callable like  <Arrow fileName="./images/yesArrow.svg" w="100vw" h="16vh" ml="33vw" mt="33vh"/>
//issues with loading image in component

import React, { Component } from 'react';
import './Arrow.css';

// import './images/firstArrow.svg';
// import './images/noArrow.svg';
// import './images/inPersonArrow.svg';
// import './images/absenteeArrow.svg';
// import './images/sentArrow.svg';


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
