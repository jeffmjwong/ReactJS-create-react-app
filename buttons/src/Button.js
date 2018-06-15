import React, { Component } from 'react';

class Button extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      buttonClicked: 0,
      clickToIncrement: props.clickToIncrement
    };
  }

  handleClick() {
    this.setState({
      buttonClicked: this.state.buttonClicked + 1
    });
    this.state.clickToIncrement();
  }

  render() {
    return (
      <div>
        <button onClick={ this.handleClick }>
          I have been clicked { this.state.buttonClicked } times!
        </button>
      </div>
    )
  }
}

export default Button;
