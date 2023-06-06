 import { useState } from "react";

 function Counters(){
    const[counter,setCounter]=useState(0);
    function handleClick(){
        setCounter(counter+1);
    }
    return(
        <div>
        <button onClick={handleClick}>click to increase the counter</button>
        <div>The counter value is {counter}</div>
        </div>
    )
 }
 export default  Counters;