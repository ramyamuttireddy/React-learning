import React, { useState } from 'react'
import Mouse from './mouse';
import Status from './status';

function SimpleMouseComponent() {
    const [isHover ,setIsHover] = useState(false);
    const [isMoving, setIsMoving] = useState(false);

    function handleStatus(x){

         setIsHover(x);
    }
    function handleMouseStatus(x){
        setIsMoving(x)
    }

  return (
    <div>
      <Status hover={isHover} moving={isMoving}/>
      <Mouse value={isHover}   latestStatus={handleStatus} mouseStatus={handleMouseStatus} />
      
    </div>
  )
}

export default SimpleMouseComponent
