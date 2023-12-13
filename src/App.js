import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import HomePage from './components/Home/HomePage';
import Navigation from './components/navigation/Navigation';
import GenresPage from './components/genres/GenresPage';
import Lists from './components/Lists/Lists';
import TitleTypes from './TitleTypes/TitleTypes';
import './App.css'

function App() {
  return (
    <div className='App'>
    <Router>
      <div>
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />}  /> 
          <Route path="/genres" element={<GenresPage />} />
          <Route path="/lists" element={<Lists />} />
          <Route path="/titletypes" element= {<TitleTypes />} />
          
        </Routes>
      </div>
    </Router>
    </div>
  );
}

export default App;
