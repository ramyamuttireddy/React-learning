import React, { useState } from 'react';
import { Link} from 'react-router-dom';
import GenresPage from '../genres/GenresPage';
import Lists from '../Lists/Lists';
import TitleTypes from '../../TitleTypes/TitleTypes';
import './Navigation.scss';
import InputComponent from '../input/InputComponent';

function Navigation() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedGenreState, setSelectedGenreState] = useState(null);
  const [isDropdownOpenList, setIsDropdownOpenList] = useState(false);
  const [selectedListState, setSelectedListState] = useState(null);
  const [isDropdownOpentypes,setIsDropdownOpentypes] =useState(false)
  const [selectedTypesState, setSelectedTypesState] = useState(null);
    

  function handleDropdown(){
    setIsDropdownOpenList(false)
    setIsDropdownOpen(false)
    setIsDropdownOpentypes(false)
    setSelectedGenreState(null)
    setSelectedListState(null)
    setSelectedTypesState(null);
  }

  function  handleDropdownClick() {
    setIsDropdownOpen(!isDropdownOpen);
    setIsDropdownOpenList(false)
    setIsDropdownOpentypes(false)
  };

  const handleStateSelect = (genre) => {
    setSelectedGenreState(genre)
    setSelectedListState(null)
    setSelectedTypesState(null)
    
  }

  function  handleDropdownListClick(){
    setIsDropdownOpenList(!isDropdownOpenList)
    setIsDropdownOpen(false)
    setIsDropdownOpentypes(false)
  };

 
  const handleStateSelectList = (list) => {
    setSelectedListState(list)
    setSelectedGenreState(null)
    setSelectedTypesState(null)
  }
  
  function handleDropdownTypesClick(){
    setIsDropdownOpentypes(!isDropdownOpentypes)
    setIsDropdownOpen(false)
    setIsDropdownOpenList(false)
  };

  const handleStateSelectTypes = (types) => {
    setSelectedTypesState(types)
    setSelectedGenreState(null)
    setSelectedListState(null)
  }

  return (
    <div className='navbar-container'>
      <nav>

        <div className="logo"><img className='logo-image' src="https://ibomma.kalpanikfilms.com/wp-content/uploads/2023/05/logo-ibomma.png"  alt=""/></div>
        
        <ul>
          <li><i class="fa fa-home green"></i><Link to="/" onClick={handleDropdown} className='nav-links'>Home</Link></li>


           <li  onClick={handleDropdownClick}  className={isDropdownOpen ? 'dropdown open' : 'dropdown'}>
            <i class="fa fa-music green"></i>
             <Link to="/genres"  className='nav-links'>Genres</Link>
             <GenresPage selectedGenre={selectedGenreState} onSelectGenre={handleStateSelect} isDropdownOpen={isDropdownOpen} />
            </li>

          
            <li onClick={handleDropdownListClick}  className={isDropdownOpenList ? 'dropdown open' : 'dropdown'}>
            <i class="fas fa-th-list"></i>
            <Link to="/lists" className='nav-links'>Lists</Link>
            <Lists selectLists={selectedListState} onSelectLists={handleStateSelectList} isDropdownOpen={isDropdownOpenList} />
            </li>


             <li onClick={handleDropdownTypesClick}  className={isDropdownOpentypes ? 'dropdown open' : 'dropdown'}>
              <i class="fa fa-list green"></i>
              <Link to="/titletypes"  className='nav-links'>Title Types</Link>
              <TitleTypes SelectTypes={selectedTypesState} onSelectTypes={handleStateSelectTypes} isDropdownOpenTypes={isDropdownOpentypes} />
              </li>

           </ul>
        <div className="search-bar">
          <InputComponent mainClassName='serch-box' inputClassName='input-box' serachClassname='search-logo'/>
        </div>

      </nav>
    </div>
  );
}

export default Navigation;
