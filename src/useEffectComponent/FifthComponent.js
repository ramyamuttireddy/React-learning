import React from 'react'
import { useState } from 'react'
import { memo } from 'react';

function FifthComponent() {
  const [number,setNumber] = useState(0)
  
  

  function handleDecrement(){
    setNumber(number-1)
  }
  function handleIncrement(){
    setNumber(number+1)
  }

  return (
    <div>
      {console.log('This is fifth component')}
      <div>Fifth component value {number}</div>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  )
}

export default memo(FifthComponent)
