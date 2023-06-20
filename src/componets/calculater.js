import React, { useState } from 'react'
import CalculaterButton from './calculaterButton';


function Calculater() {
    const [result,setResult] =useState('')

  function handleResult(x){
    setResult(x)
  }

  const clear = () => {
    setResult('');
  };

  const calculate = () => {
    try {
      setResult(eval(result).toString());
    } catch (error) {
      setResult('Error');
    }
  };
  return (

    <div className='calculator'>
      
            <input type="text" value={result} />
        <div className='keyboard'>

      <CalculaterButton name='7' value={result} setResult={handleResult}/>
      <CalculaterButton name='8' value={result} setResult={handleResult}/>
      <CalculaterButton name='9' value={result} setResult={handleResult}/>
      <CalculaterButton name='+' value={result} setResult={handleResult}/>
      <CalculaterButton name='4' value={result} setResult={handleResult}/>
      <CalculaterButton name='5' value={result} setResult={handleResult}/>
      <CalculaterButton name='6' value={result} setResult={handleResult}/>
      <CalculaterButton name='-' value={result} setResult={handleResult}/>
      <CalculaterButton name='1' value={result} setResult={handleResult}/>
      <CalculaterButton name='2' value={result} setResult={handleResult}/>
      <CalculaterButton name='3' value={result} setResult={handleResult}/>
      <CalculaterButton name='*' value={result} setResult={handleResult}/>
      <CalculaterButton name='.' value={result} setResult={handleResult}/>
      <CalculaterButton name='0' value={result} setResult={handleResult}/>
      <CalculaterButton name='/' value={result} setResult={handleResult}/>
      </div>
      <button className="clear" onClick={clear}>Clear</button>
      <button className="equal" onClick={calculate}>=</button>
    </div>
  )
}

export default Calculater;
