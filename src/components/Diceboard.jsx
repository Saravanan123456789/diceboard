import React, { useState } from "react";

function Diceboard()
  {
  const [rolledValue, setRolledValue] = useState(1);

  const roll = () => {
    setRolledValue(Math.floor(Math.random() * 6)+1);
  };

  return (
    <div className="app">
     <button onClick={roll} className="rollingdice">roll</button>
      <p>rolled dice value: {rolledValue}</p>
    </div>
    
  );
}

export default Diceboard;
