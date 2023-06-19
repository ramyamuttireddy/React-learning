import React from "react"

function SecondComponents ({ value, setValue }) {
  function  handleDecrement(){
    if(setValue){
   setValue(value - 1)
    }
  }
  function  handleIncrement(){
     if(setValue){
    setValue(value + 1)
     }
   }
  return (
    <div className="button-container">
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
};

export default SecondComponents;
