import React from 'react'

function Status({hover , moving}) {
  return (
    <div>
      <div className='mouse-text'> {hover ? 'Mouse Enterd' : 'Mouse Left '}</div>
      
    </div>
  )
}

export default Status;
