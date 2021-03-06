import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      opacity: 0,
      text: props.text
    };

  }

  // for fade in/out without lag
  componentDidMount () {
     window.onscroll =()=>{
      const newScrollHeight = 80 * Math.pow(Math.floor(window.scrollY / 50),1);
      if (this.state.currentScrollHeight != newScrollHeight){
          this.setState({currentScrollHeight: newScrollHeight})
      }
    }
  }

  render() {
    const opacity = Math.min(100 / this.state.currentScrollHeight  , 1);
    return (
      <div>
        <div style={{zIndex:0}} className="title-container-shadow">
          <h1  class='title-shadow' style={{opacity}}>{this.state.text}</h1>
        </div>
        <div style={{zIndex:0}} className="title-container">
          <h1 class='title' style={{opacity}}>{this.state.text}</h1>
        </div>
      </div>
    );
  }
}

export default Header;
