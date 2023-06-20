import React from 'react'

function CalculaterButton({ value, setResult, name }) {
  
    function handleclick() {
      setResult(value + name);
    }
  
    return (
      <div>
        <button onClick={handleclick}>{name}</button>
      </div>
    );
  }
  
  export default CalculaterButton;