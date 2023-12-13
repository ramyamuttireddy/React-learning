import React, { useState, useEffect } from 'react';
import Maincontent from '../content/Maincontent';
import SubContent from '../content/SubContent';
import UpComingMovies from '../ExtraMovies/upComingMovies';
import Series from '../ExtraMovies/Series';
import './HomePage.scss'

function HomePage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchMovies();
  }, []);

  async function fetchMovies() {
    const Url = `https://moviesdatabase.p.rapidapi.com/titles?list=top_boxoffice_200&page=5&limit=30`;
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '588b5ef536msh4ffd5c28af55bb0p1ee87fjsn22c43028640d',
        'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com',
      },
    };

    try {
       const response = await fetch(Url, options);
       if (response.ok) {
          const result = await response.json();
          setMovies(result.results)
        } else {
          throw new Error('Failed to fetch movies');
        }
     
      
    } catch (error) {
      console.error(error);
    }
  }

  const fallbackImageURL = 'https://static-koimoi.akamaized.net/wp-content/new-galleries/2015/12/airlift-movie-poster-4.jpg'; 


  return (
    <div>
      
      <div>
        <div className='home-page-movies'>
         <Maincontent />
        <div className='movie-section'>
        {movies.map((movie, index) => (
          <div key={index} >
            <img
              className="movie-image"
              src={movie.primaryImage?.url || fallbackImageURL }
              alt={movie.titleText?.text}
            />
            <p className='movie-title'>{movie.titleText?.text}</p>
            <p className='movie-year'>{movie.releaseYear?.year}</p>
          </div>
        ))}
        </div>
        </div>
          <SubContent />  
          <UpComingMovies />
          <Series />    
      </div>
    </div>
  );
}

export default HomePage;
