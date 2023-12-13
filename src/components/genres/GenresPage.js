import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './GenresPage.scss'

function GenresPage({ selectedGenre, onSelectGenre, isDropdownOpen }) {
  const [genres, setGenres] = useState([]);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchGenres();
  }, []);

  useEffect(() => {
    if (selectedGenre) {
      fetchMoviesByGenre(selectedGenre)
    }
  }, [selectedGenre]);

  async function fetchGenres() {
    const url = 'https://moviesdatabase.p.rapidapi.com/titles/utils/genres';
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '588b5ef536msh4ffd5c28af55bb0p1ee87fjsn22c43028640d',
        'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com',
      },
    };

    try {
      const response = await fetch(url, options);
        if (response.ok) {
        const result = await response.json();
        setGenres(result.results.filter((genre) => genre !== null));
      } else {
        throw new Error('Failed to fetch movies');
      }
    } catch (error) {
      console.error(error);
    }
  }

  async function fetchMoviesByGenre(genre){
    const url = `https://moviesdatabase.p.rapidapi.com/titles?genre=${genre}&limit=15&year=2020`;
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '588b5ef536msh4ffd5c28af55bb0p1ee87fjsn22c43028640d',
        'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com',
      },
    };
try{
   const response = await fetch(url,options);
   if(response.ok){
    const result= await  response.json()
    setMovies(result.results)
    console.log(setMovies)
   }
   else {
    throw new Error('Failed to fetch movies');
  }
} catch (error) {
  console.error(error);
}
}  

  const handleGenreClick = (genre) => {
    onSelectGenre(genre);
  };
  

  const alternativeImage="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/bae27228199851.55cb82652ffe3.jpg";
  
  return (
    <>
      <ul className={`dropdown-menu ${isDropdownOpen ? 'open' : ''}`}>
        {genres.map((genre) => (
          <li key={genre} onClick={() => handleGenreClick(genre)}>
            <Link
              to={`/genres/${genre}`}
              className={`genre-link ${genre === selectedGenre ? 'active' : ''}`}
            >
              {genre}
            </Link>
          </li>
        ))}
      </ul>
     
      {selectedGenre && (
        <div className="movies-container">
          <div className="movies-heading">
          <h2 className='heading'>Movies in {selectedGenre}</h2>
          </div>
          <div className='genres-movie-section'>
          { movies.map((movie, index) => (
            <div key={index}>
             <img
                className="movie-image-genres"
                src={movie.primaryImage?.url  || alternativeImage}
                alt={movie.titleText?.text}
              />
              <p className='movie-title'>{movie.titleText?.text}</p>
            
            </div>
          ))}
          </div>
        </div>
      )}
    </>
  );
}

export default GenresPage;
