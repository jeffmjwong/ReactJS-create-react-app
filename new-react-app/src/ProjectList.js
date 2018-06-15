import React, { Component } from 'react';
import Project from './Project';

const projects = [
  { title: 'Riversite', href: 'http://www.riversite.xyz' },
  { title: 'Memory Game', href: 'https://jeffmjwong.github.io/memory-game-by-jeff/' },
  { title: 'Online Portfolio', href: 'https://jeffmjwong.io/' }
];

const ProjectList = () => {
  const projectComponents = projects.map(project => {
    return (
      <Project title={ project.title } href={ project.href } />
    )
  });
  return projectComponents;
}

export default ProjectList;
