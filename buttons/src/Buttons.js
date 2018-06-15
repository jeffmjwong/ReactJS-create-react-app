import React, { Component } from 'react';
import Button from './Button';

class Buttons extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numberOfButtons: props.numberOfButtons,
      clickToIncrement: props.clickToIncrement
    };
  }

  render() {
    const buttonList = [];
    for (let i = 0; i < this.state.numberOfButtons; i++) {
      buttonList.push(<Button clickToIncrement={ this.state.clickToIncrement } />);
    }
    return buttonList;
  }
}

export default Buttons;
