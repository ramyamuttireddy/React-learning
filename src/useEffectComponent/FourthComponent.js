import React, { useEffect } from 'react'
import FifthComponent from './FifthComponent'
import { useState } from 'react';

function FourthComponent() {
  const [count,setCount] = useState(0) 

  function handleDecrement(){
    setCount(count - 1)
  }
  function handleIncrement(){
    setCount(count + 1)
  }
  
useEffect(() => {
    console.log('This is the fourth component');
  }, [count,FourthComponent]);
   
  return (
    <div>
      
     
      <div>Fourth component value {count} </div>
      {console.log[FourthComponent]}
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleIncrement}>Increment</button>

      <FifthComponent />
    </div>
  )
}

export default FourthComponent
