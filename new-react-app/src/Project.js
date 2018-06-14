import React, { Component } from 'react';

const Project = props => {
  return (
    <div>
      <h3><a href={ props.href }>{ props.title }</a></h3>
      <p>This is my project!</p>
    </div>
  )
};

export default Project;
