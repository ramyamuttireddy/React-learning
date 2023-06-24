import React, { useState } from 'react'
import Button from './button';
import Status from './status';
import  { useEffect } from 'react'
import Simple from './Simple';
import Input from './Input';

function Simplecount() {
 const [count, setCount] =useState(0);
 const [text ,setText] = useState('')

 useEffect (() => {
    console.log('this is typing....')
    document.title = 'the title value is' + count +'';

   },[count])

   useEffect(()=>{
     console.log('input text')
   },[text])

    function handleLatestValue(x){
        setCount(x)
    }
    function handleInput(p){
        setText(p)  
    }

  return (
    <div>

    <Status value={count}/>

    <Button value={count} latestValue={handleLatestValue} />
    <Simple />

    <Input inputValue={handleInput} value={text}/>
   
    </div>
  )
}

export default Simplecount;
