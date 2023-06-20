import React from 'react'

function Status({hover , moving}) {
  return (
    <div>
      <div> Mouse situvation {hover ? 'mouse enterd' : 'mouse left '}</div>
      <div> Mouse moving {moving ? 'mouse moved' : 'mouse stable '}</div>
    </div>
  )
}

export default Status;
