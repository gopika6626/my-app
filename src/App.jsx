import React, { useState, useEffect } from 'react';
import Button from './components/Button'
import './App.css'
import Cns from './assets/cnslcomponent.png';
import Mask from './assets/Mask group1.png'
import Masks from './assets/Mask group left top.png'
import Vectors from './assets/Vector2.png'
const App = () => {

  const words = ['Play', 'Reality', 'Gaming'];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 3000);
    return () => clearInterval(intervalId);
  }, [words.length]);
  
  const wordClasses = ['play-word', 'reality-word', 'gaming-word'];


  return (
    <div className="container">
      <div className='constant-text'>
        <h1>
          Redefine
        </h1>
      </div>

<div className="rotating-text">
        <h1>
          <span>{words[currentWordIndex]}</span>.
        </h1>
      </div>
      
      <div>
      <Button/>
      
      </div>
      
      <div className="cnslvector">
      <img src = {Cns} alt="Cnsl" className="side-cnsl"/>
      </div>

      <div className='maskvector'>
      <img src ={Mask} alt="Mask" className="mask"/>
      </div>
      <div className='maskvector1'>
        <img src = {Masks} alt="Mask" className="mask1"/>

      </div>
      <div className='heading'>
        <h1> arc </h1>
      </div>
      <div className='vectors'>
        <img src={Vectors} alt="vectors" className="vectors1"/>
      </div>


      
    </div>

  );
};

export default App;
