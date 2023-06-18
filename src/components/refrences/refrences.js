 import { useRef } from "react";

 function Refrences(){
    
    const textInput=useRef(null);

    function focusInput(){
        if(textInput.current){
         textInput.current.focus();
        }
    }
 return(
    <div>
        <input type="text" ref={textInput}/>
        <input type="text"  value="focus to the textInput" onClick={focusInput}/>
    </div>
 )

 }
 export default Refrences;