import React, { useEffect, useState } from 'react'


function FirstComponent() {

  const [count,setCount] = useState(0)

  function handleDecrement(){
      setCount(count-1)
  }
  function handleIncrement() {
    setCount(count+1)
  }

  useEffect(() => {
   console.log('this is first component') 
  },[FirstComponent,count])

  return (
    <div>
      {console.log[FirstComponent]}

      <div>First component value {count}</div>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  )
}

export default FirstComponent
