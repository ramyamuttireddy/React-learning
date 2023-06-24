import React, { useEffect } from 'react'
import SixthComponent from './SixthComponent'
import { useState } from 'react'


function ThirdComponet() {
  const [number,setNumber] = useState(0)

  useEffect(() => {
    console.log('This is third component')
  },[ThirdComponet,number])
  
  function handleDecrement(){
    setNumber(number-1)
  }
  function handleIncrement(){
    setNumber(number+1)
  }
    
  return (
    <div>
      <div className='third-component'>
      <div>Third component value {number}</div>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleIncrement}>Increment</button>

       <SixthComponent />
       </div>
    </div>
  )
}

export default ThirdComponet
