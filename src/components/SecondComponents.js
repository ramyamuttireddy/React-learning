import React from 'react'

function SecondComponents({value,Setvalue}) {

  function handleIncrement(){
    if(Setvalue){

       Setvalue(value + 1);
    }
  }
  function handleDecrement(){
    if(Setvalue){
       Setvalue(value - 1);
    }
  }
  return (
    <div className='button-container'>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  )
}

export default SecondComponents;