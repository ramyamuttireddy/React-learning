import React, { useState, useEffect } from 'react';

function HomePage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchMovies();
  }, []);

  async function fetchMovies() {
    const url = 'https://moviesdatabase.p.rapidapi.com/titles';
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
        console.log(result);
        setMovies(result);
      } else {
        throw new Error('Failed to fetch movies');
      }
    } catch (error) {
      console.error(error);
    }
  }
  console.log(movies)
  return (
  <div>
    <h1>Home</h1>
    <ul>
    {movies.map((movie, index) => (
          <li key={index}>
          <img src={movie.primaryImage.url} alt={movie.titleText && movie.titleText.text} />
          <p>{movie.titleText.text}</p>
           <p>{movie.releaseYear.year}</p>
          </li>
        ))}
 </ul>
  </div>
);

   
}

export default HomePage;
