import './App.css'; 
import FirstComponents from './components/FirstComponents';
import SecondComponents from './components/SecondComponents';
import { useState } from 'react';


function App() {
 const [data,setData] = useState(0);

 function handleOnclick(x){
    setData(x);
 }
  return (
    <div className='App'>
      <FirstComponents value={data}/>
      <SecondComponents value={data} Setvalue={handleOnclick}/>
    </div>
  )
}
export default  App;

