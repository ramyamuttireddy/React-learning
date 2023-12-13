import React from 'react'
import InputComponent from '../input/InputComponent';
import './content.scss';

function SubContent() {
  return (
    <div>
      <div className="subContent-container">
        <div className='sub-heading'>
           <h6> Looking For More Movies? Use Our Search </h6>
        </div>
        <div className='sub-content'>
           Thousands of movies in our database & still adding
        </div>

        <InputComponent mainClassName="serch-box1" inputClassName="input-box1"  serachClassname="search-logo1" />
      </div>
      
    </div>
  )
}

export default SubContent
