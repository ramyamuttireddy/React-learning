import React from 'react'

function Status({hover , moving}) {
  return (
    <div>
      <div> Mouse situvation {hover ? 'mouse enterd' : 'mouse left '}</div>
      
    </div>
  )
}

export default Status;
