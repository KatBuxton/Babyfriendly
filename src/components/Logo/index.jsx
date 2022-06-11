import React from 'react';
import './style.css';

export const Logo = () => {
  return (
    <>
      <div className="logo" onClick={() => window.location.reload(false)}>
        <h1>
          <span className="headlinePurple">baby</span>
          <span className="headlineBlue">FRIENDLY</span>
        </h1>
      </div>
      <div className="logo-img" onClick={() => window.location.reload(false)}></div>
    </>
  );
};
