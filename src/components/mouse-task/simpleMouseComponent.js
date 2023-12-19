import React, { useState } from 'react'
import Mouse from './mouse';
import Status from './status';





export default function SimpleMouseComponent() {
  
  const [isOver,setIsOver]= useState(false);

  function HandleStatus(x){
    setIsOver(x);
  }

  return (
    <div>
       <Mouse value={isOver} latestStatus ={HandleStatus}/>
       <Status hover={isOver} />
    </div>
  )
}






