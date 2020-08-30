import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {opacity: 0};
  }

  // for fade in/out without lag
  componentDidMount () {
     window.onscroll =()=>{
      const newScrollHeight = 20 * Math.pow(Math.floor(window.scrollY / 30), 2);
      if (this.state.currentScrollHeight != newScrollHeight){
          this.setState({currentScrollHeight: newScrollHeight})
      }
    }
  }

  render() {
    const opacity = Math.min(100 / this.state.currentScrollHeight  , 1);
    return (
      <div style={{zIndex:0}} class="title-container">
        <h1 style={{opacity}}  >Quickstart SC Vote</h1>
      </div>
    );
  }
}

// <div style={{opacity}} id='element-you-want-to-fade'> </div>
export default Header;
