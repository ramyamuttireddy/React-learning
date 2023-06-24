import React, { useState, useEffect } from 'react';
import FourthComponent from './FourthComponent';

function SecondComponent() {

  const [value, setValue] = useState(0)
  
 
  useEffect(() => {
    console.log('this is Second component')
  }, [value]);

  
  function handleDecrement() {
    setValue(value - 1)
    
  }

  function handleIncrement() {
    setValue(value + 1)
  
  }

 return (
    <div>
        <div className='second-component'>
         {console.log[SecondComponent]}
        <div>second component value: {value}</div> 
        <button onClick={handleDecrement}>Decrement</button>
        <button onClick={handleIncrement}>Increment</button> 

        <FourthComponent />
       
      </div>
      
    </div>
  );
}

export default SecondComponent;
