import React from 'react'

function Mouse({value,latestStatus,mouseStatus}) {
  
    function handleMouseEnter(){
        latestStatus(true)
    }
    function handleMouseLeave(){
        latestStatus(false)
        
    }

   

  return (
    <div>
      <div className='mouse-box' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} 
      >

      </div>
    </div>
  )
}

export default Mouse;
