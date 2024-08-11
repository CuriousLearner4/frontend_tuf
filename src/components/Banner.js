// src/components/Banner.js
import React from 'react';

const Banner = ({ description, link, timeLeft }) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', marginTop: '20px' }}>
      <p>{description}</p>
      {link && (
        <a href={link} target="_blank" rel="noopener noreferrer">
          Click Here
        </a>
      )}
      <p>Time remaining: {timeLeft} seconds</p>
    </div>
  );
};

export default Banner;
