import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import Project from './Project';
import NavBar from './NavBar';
import ProjectList from './ProjectList';

class App extends Component {
  render() {
    return (
      <div id="bar" className="foo">
        <NavBar />
        <h1>My Portfolio</h1>
        <p>Hello</p>
        <ProjectList />
      </div>
    );
  }
}

export default App;
