// src/components/Header.js
import React from 'react';

const Header = ({ isVisible, toggleHandler }) => {

  return (
    <header style={{
      backgroundColor: '#282c34',
      padding: '10px',
      color: 'white',
      display: 'flex',
      justifyContent: 'space-between', 
      alignItems: 'center',  
    }
    }>
      <h1>My Website</h1>
      <button onClick={toggleHandler}>
        {isVisible ? 'Hide Banner' : 'Show Banner'}
      </button>
    </header>
  );
};

export default Header;
