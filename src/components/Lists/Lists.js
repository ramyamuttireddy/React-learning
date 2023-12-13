import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Lists.scss';

function Lists({ selectLists, onSelectLists, isDropdownOpen }) {
  const [lists, setLists] = useState([]);
  const [listMovies, setListMovies] = useState([]);

  useEffect(() => {
    fetchLists();
  }, []);

  useEffect(() => {
    if (selectLists) {
      fetchListsMovies(selectLists);
    }
  }, [selectLists]);

  async function fetchLists() {
    const url = 'https://moviesdatabase.p.rapidapi.com/titles/utils/lists';
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '588b5ef536msh4ffd5c28af55bb0p1ee87fjsn22c43028640d',
        'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com',
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      setLists(result.results.filter((list) => list !== null));
    } catch (error) {
      console.error(error);
    }
  }

  async function fetchListsMovies(list) {
    const url = `https://moviesdatabase.p.rapidapi.com/titles?list=${list}&limit=15&year=2021`;
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '588b5ef536msh4ffd5c28af55bb0p1ee87fjsn22c43028640d',
        'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com',
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      setListMovies(result.results);
    } catch (error) {
      console.error(error);
    }
  }

  function handleListClick(list) {
    onSelectLists(list);
  }

  const altListImage = "https://petapixel.com/assets/uploads/2015/09/nightcrawler.jpg";

  return (
    <div>
      <div className={`dropdown-list ${isDropdownOpen ? 'open' : ''}`}>
        {lists.map((list) => (
          <div className='list' key={list} onClick={() => handleListClick(list)}>
            <Link to={`/lists/${list}`} className={`list-link ${list === selectLists ? 'active' : ''}`}>
              {list}
            </Link>
          </div>
        ))}
      </div>

      {selectLists && (
        <div className="movies-container">
          <div className="movies-heading">
            <h2 className='heading'>Movies in {selectLists}</h2>
          </div>
          <div className='lists-movie-section'>
            {listMovies.map((movie, index) => (
              <div key={index}>
                <img
                  className="movie-image-lists"
                  src= {movie.primaryImage?.url || altListImage }
                  alt= {movie.titleText?.text}
                />
                <p className='movie-title'>{movie.titleText?.text}</p>
                
                
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Lists;
