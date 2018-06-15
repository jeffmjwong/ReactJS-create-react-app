import React, { Component } from 'react';
import './App.css';

// class Event extends Component {
//
// }

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: 0,
      user: props.username,
      buttonText: 'Log In',
      loginInstances: 0,
      loginLog: [],
      logoutLog: []
    };
  }

  toggleLogin = () => {
    if (this.state.buttonText === 'Log In') {
      this.setState({
        user: 'admin',
        buttonText: 'Log Out',
        loginInstances: this.state.loginInstances + 1,
        loginLog: [...this.state.loginLog, (new Date().toString())]
      });
    } else {
      this.setState({
        user: 'Shaun',
        buttonText: 'Log In',
        logoutLog: [...this.state.logoutLog, (new Date().toString())]
      });
    }
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        seconds: this.state.seconds + 1
      });
    }, 1000)
  }

  render() {
    return (
      <div className="App">
        <p className="App-intro">
          You have been here for { this.state.seconds } seconds
        </p>
        <p>Hello, { this.state.user }</p>
        <button onClick={ this.toggleLogin }>{ this.state.buttonText }</button>
        <p>You have logged in { this.state.loginInstances } times</p>
        <ul>
          Login Logs:
          { this.state.loginLog.map(timestamp => {
            return (
              <li>{ timestamp }</li>
            )
          }) }
        </ul>
        <ul>
          Logout Logs:
          { this.state.logoutLog.map(timestamp => {
            return (
              <li>{ timestamp }</li>
            )
          }) }
        </ul>
      </div>
    );
  }
}

export default App;
