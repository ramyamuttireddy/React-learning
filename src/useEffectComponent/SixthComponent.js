import React from 'react'
import { useState } from 'react'
import {memo} from 'react'

function SixthComponent() {
  const [count,setCount] = useState(0)
  
  function handleDecrement(){
    setCount(count-1)
  }
  function handleIncrement(){
    setCount(count+1)
  }
  return (
    <div>
     
      <div>Sixth component value {count}</div>
      {console.log('This is Sixth component')}
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleIncrement}>Increment</button>

    </div>
  )
}

export default memo(SixthComponent)
