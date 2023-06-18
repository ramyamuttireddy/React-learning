import { useState } from "react";

export default function Form() {
      const [status, useStatus] =useState(1);
      const [text,useText] = useState('');

      function handleOnchange(){
        
      }
    return (
      <>
        <h2>City quiz</h2>
        <p>
          In which city is there a billboard that turns air into drinkable water?
        </p>
        <form>
          <textarea onChange={handleOnchange} />
          {text}
          <br />
          <button>
            Submit
          </button>
          
            <p className="Error">
              Good guess but a wrong answer. Try again!
            </p>
          
        </form>
        </>
    );
  }
  
