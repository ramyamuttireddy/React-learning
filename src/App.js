import { useState } from 'react';
import './App.css';
import FirstComponent from './useEffectComponent/FirstComponent';
import SecondComponent from './useEffectComponent/SecondComponent';
import ThirdComponet from './useEffectComponent/ThirdComponet';
import { useEffect } from 'react';

function App() {

  const [mainCount,setMainCount] =useState(0);


     function handleDecrement(){
      setMainCount(mainCount-1)
   }
    function handleIncrement() {
      setMainCount(mainCount+1)
      }

     
  
  return (
    <div className="App">

      {console.log('This is App component')}
      <div>App component value {mainCount}</div>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleIncrement}>Increment</button> 
          
      <FirstComponent /> 
      <SecondComponent />
      <ThirdComponet />
     
    </div>
  );
}

export default App;
