import React from 'react'
import './inputComponent.scss'


function InputComponent({ mainClassName,inputClassName , serachClassname}) {
    return(
      <div>
        <div className={`${mainClassName}`}>
           <input className={`${inputClassName}`} placeholder='Search...' /> 
            <span className={`fa fa-search ${serachClassname}`}></span>
        </div>
      </div>
    )
}

export default InputComponent
