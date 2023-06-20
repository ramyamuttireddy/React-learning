import React from 'react'

function Mouse({value,latestStatus,mouseStatus}) {
  
    function handleMouseEnter(){
        latestStatus(true)
    }
    function handleMouseLeave(){
        latestStatus(false)
        
    }

    function handleMouseMove(){
        if(mouseStatus){
        mouseStatus(true);
        }
        else{
            mouseStatus(false);   
        }
    }
  return (
    <div>
      <div className='mouse-box' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onMouseMove={handleMouseMove}>

      </div>
    </div>
  )
}

export default Mouse;
