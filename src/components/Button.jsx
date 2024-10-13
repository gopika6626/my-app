import React from 'react';
import Vector from '../Vector1.png'

const Button = () => {
  return (
    <div>
      <button className="launchbutton">
      <span>launching soon</span>
      <img src={Vector} alt="Vector Icon" className="vectorimage" />
    </button>
    </div>
  );
}

export default Button;
