function Button({value,latestValue}) {
 
   

    function handleDecrement(){
       latestValue(value -1)
    }
    function handleIncrement(){
        latestValue(value + 1)
    }

  return (
    <div>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  )
}

export default Button;
