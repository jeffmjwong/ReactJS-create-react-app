import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Project from './Project';
import NavBar from './NavBar';

class App extends Component {
  render() {
    const projects = [
      { title: 'Riversite', href: 'http://www.riversite.xyz' },
      { title: 'Memory Game', href: 'https://jeffmjwong.github.io/memory-game-by-jeff/' },
      { title: 'Online Portfolio', href: 'https://jeffmjwong.io/' }
    ];
    const projectsList = projects.map(project => {
      return (<Project title={ project.title } href={ project.href } />);
    });
    return (
      <div id="bar" className="foo">
        <NavBar />
        <h1>My Portfolio</h1>
        <p>Hello</p>
        { projectsList }
      </div>
    );
  }
}

export default App;
