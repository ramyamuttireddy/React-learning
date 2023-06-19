import './App.css'; 
import FirstComponents from './components/FirstComponents';
import SecondComponents from './components/SecondComponents';
import { useState } from 'react';


function App() {
  const [data, setData] =useState(0);
 

  function handleIncrement(x){
   setData(x);
  }
  
  return(
    <div className='App'>
      <div>

         <FirstComponents value={data} />
         <SecondComponents  value={data} setValue={handleIncrement} />

      </div>
      </div>
  )
}

export default App;
