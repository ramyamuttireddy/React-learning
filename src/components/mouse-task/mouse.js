import React from 'react'

function Mouse({value,latestStatus}) {
  
    function handleMouseEnter(){
        latestStatus(true)
    }
    function handleMouseLeave(){
        latestStatus(false)
        
    }
   

return (
    <div>
      <div className='mouse-box' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}></div>
    </div>
  )
}

export default Mouse;
