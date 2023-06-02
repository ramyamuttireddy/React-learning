 import './button.scss';
 

function Button(props){
  
  return(
     <button className={`${props.bgColor ? props.bgColor : ""}  ${props.buttonType ? props.buttonType : ""}`}>{props.text}</button>
  )
}
export default Button;