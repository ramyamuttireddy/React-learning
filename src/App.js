import Navbar from './components/navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import Home from './components/pages/home';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' Component={Home} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
