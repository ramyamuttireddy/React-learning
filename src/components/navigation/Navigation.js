import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <div>
       <nav>
      <div className="logo">Logo</div>
      <div className="search-bar">
        <input type="text" placeholder="Search..." />
        <span className="search-icon">&#128269;</span>
      </div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/genres">Genres</Link></li>
        <li><Link to="/lists">Lists</Link></li>
        <li><Link to="/titletypes">Title Types</Link></li>
      </ul>
    </nav> 
    </div>
  )
}

export default Navigation
