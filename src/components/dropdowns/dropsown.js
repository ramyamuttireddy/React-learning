
import { useState } from "react";

function DropDown(){

    const[isOpen,setIsOpen] = useState(false);

    function handleClick(){
        setIsOpen(!isOpen); 
    }

    return(
        <div>
            <div className="main-dropdown" onClick={handleClick}>Main Dropdown</div>
            <div className={`dorpdown-content ${isOpen ?"show" :""}`}>
                <div>content 1</div>
                <div>content 2</div>
                <div>content 3</div>
                <div>content 4</div>
                <div>content 5</div>

            </div>
        </div>
    )
}
export default DropDown;