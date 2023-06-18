
import './App.css';
import Counters from './components/counters/counter';
import DropDown from './components/dropdowns/dropsown';
import './components/style.css';
import Refrences from './components/refrences/refrences';
import Form from './components/froms/from';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Counters />
       <DropDown />
       <Refrences />
       <Form />
       
      </header>
    </div>
  );
}

export default App;
