import React, { useState } from "react";
import './Diceboard.css'
function Diceboard()
  {
  const [rolledValue, setRolledValue] = useState(1);

  const roll = () => {
    setRolledValue(Math.floor(Math.random() * 6)+1);
  };

  return (
    <div>
    
    <div className="app">
    
      <h1>Dice Board</h1>
     <button onClick={roll} className="rollingdice">roll</button>
      <p>rolled dice value: {rolledValue}</p>
    </div>
    </div>
  );
}

export default Diceboard;
