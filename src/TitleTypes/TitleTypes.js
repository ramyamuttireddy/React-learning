import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './TitleTypes.scss';

function TitleTypes({ SelectTypes, onSelectTypes, isDropdownOpenTypes }) {
  const [titleTypes, setTitleTypes] = useState([]);
  const [titleTypeMovie, setTitleTypeMovie] = useState([]);

  useEffect(() => {
    fetchTitleTypes();
  }, []);

  useEffect(() => {
    if (SelectTypes) {
      fetchTitleTypesImages(SelectTypes);
    }
  }, [SelectTypes]);

  async function fetchTitleTypes() {
    const url = 'https://moviesdatabase.p.rapidapi.com/titles/utils/titleTypes';
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
      setTitleTypes(result.results.filter((types) => types !== null));
    } catch (error) {
      console.error(error);
    }
  }

  async function fetchTitleTypesImages(types) {
    const url = `https://moviesdatabase.p.rapidapi.com/titles?titleType=${types}&year=2022`;
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
      setTitleTypeMovie(result.results);
    } catch (error) {
      console.error(error);
    }
  }

  function handleTypesClick(types) {
    onSelectTypes(types)
  }

  
 const alternateImage1="https://cdn.shopify.com/s/files/1/0057/3728/3618/products/esbnov21_240x360_crop_center.progressive.jpg?v=1650549626"
 
  return (
    <div>
      <div className={`dropdown-types ${isDropdownOpenTypes ? 'open' : ''}`}>
        {titleTypes.map((types) => (
          <div  className="types" key={types} onClick={() => handleTypesClick(types)}>
            <Link
              to={`/titletypes/${types}`}
              className={`types-link ${types === SelectTypes ? 'active' : ''}`}
            >
              {types}
            </Link>
          </div>
        ))}
      </div>

      {SelectTypes && (
        <div className="movie-container">
          <div className="movies-heading">
            <h2 className="heading">Movies in {SelectTypes}</h2>
          </div>
          <div className="types-movie-section">
            {titleTypeMovie.map((movie,index) => (
              <div key={index}>
                <img
                  className="movie-image-lists"
                  src={movie.primaryImage?.url || alternateImage1 }
                  alt={movie.titleText?.text}
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

export default TitleTypes;
