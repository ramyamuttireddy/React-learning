import './App.css';
import Button from './components/Buttons/Button';
 
function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
          
        </a> */}
        <Button text="Read more"  bgColor="primary"  buttonType="solid"/>
        <Button text="Read more"  bgColor="secondary"  buttonType="solid"/>
        <Button text="Read more"  bgColor="white"  buttonType="solid"/>
        <Button text="Read more"  bgColor="black"  buttonType="solid"/>

        <Button text="Read more"  bgColor="primary"  buttonType="outline"/>
        <Button text="Read more"  bgColor="secondary"  buttonType="outline"/>
        <Button text="Read more"  bgColor="white"  buttonType="outline"/>
        <Button text="Read more"  bgColor="black"  buttonType="outline"/>

      </header>

   
    </div>
  );
}

export default App;
