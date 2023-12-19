import React from 'react'

export default function status({hover}) {
  return (
    <div className='mouse-status-box'>
      <div class="mousebox"> {hover ?'mouse entered' : 'Mouse Left'}</div>
    </div>
  )
}
