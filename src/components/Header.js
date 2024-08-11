// src/components/Header.js
import React from 'react';

const Header = ({ isVisible, toggleBanner }) => {
  return (
    <header style={{ backgroundColor: '#282c34', padding: '10px', color: 'white' }}>
      <h1>My Website</h1>
      <button onClick={toggleBanner}>
        {isVisible ? 'Hide Banner' : 'Show Banner'}
      </button>
    </header>
  );
};

export default Header;
