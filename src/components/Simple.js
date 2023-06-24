import React from 'react'
import { memo } from 'react'
function Simple() {
   
  return (
    <div>
       {console.log('this is text')}
      <div>This a text</div>
    </div>
  )
}

export default memo(Simple)
