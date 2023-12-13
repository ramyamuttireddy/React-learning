import './App.css';
import Button from './components/Buttons/Button';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button text="Read More" bgColor="primary" buttonType="solid" />
        <Button text="Read More" bgColor="secondary" buttonType="solid" />
        <Button text="Read More" bgColor="black" buttonType="solid" />
        <Button text="Read More" bgColor="white" buttonType="solid" />


        <Button text="Read More" bgColor="primary" buttonType="outline" />
        <Button text="Read More" bgColor="secondary" buttonType="outline" />
        <Button text="Read More" bgColor="black" buttonType="outline" />
        <Button text="Read More" bgColor="white" buttonType="outline" />
     </header>
</div>
  );
}

export default App;
