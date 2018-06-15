import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Buttons from './Buttons';

class App extends Component {
  constructor() {
    super();
    this.increment = this.increment.bind(this);
    this.state = {
      totalClicks: 0
    };
  }

  increment() {
    this.setState({
      totalClicks: this.state.totalClicks + 1
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div>
          <p>Total clicks: { this.state.totalClicks }</p>
        </div>
        <div className="App-intro">
          <Buttons numberOfButtons={ 10 } clickToIncrement={ this.increment } />
        </div>
      </div>
    );
  }
}

export default App;
