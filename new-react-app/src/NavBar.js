import React from 'react';

const NavBar = () => {
  // Functional components just return JSX directly (no render method)
  return (
    <nav>
      <a href="https://facebook.com">Facebook</a>
      <a href="https://instagram.com">Instagram</a>
    </nav>
  )
};

export default NavBar;
