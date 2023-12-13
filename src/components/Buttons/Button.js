 import './button.scss';
 import React from 'react'
 
 function Button(props) {
   return (
     <div>
       <button className={`${props.bgColor? props.bgColor:""} ${props.buttonType ? props.buttonType :""}`}> {props.text} </button>
     </div>
   )
 }
 export default Button;
