import React, { useState } from 'react'
import Mouse from './mouse';
import Status from './status';

function SimpleMouseComponent() {
  const [isHover ,setIsHover] = useState(false);

    
  function handleStatus(x){
      setIsHover(x);
    }
    

  return (
    <div>
      <Status hover={isHover} />
      <Mouse value={isHover}  latestStatus={handleStatus} />
      
    </div>
  )
}

export default SimpleMouseComponent
