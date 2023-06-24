import React from 'react'

function Input({inputValue,value}) {

  function handleChange(e){
    inputValue(e.target.value)
  }

  return (
    <div>

      <input onChange={handleChange} />
      <div>the text is :: {value}</div>

    </div>
  )
}

export default Input;
