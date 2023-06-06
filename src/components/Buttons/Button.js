 import './button.scss';
 
 

function Button(props){
  
  return(
    <div className='button-colors'>
     <button className={`${props.bgColor ? props.bgColor : ""}  ${props.buttonType ? props.buttonType : ""}`}>{props.text}</button>
     </div>
  )
}


export default Button;
