import React, { useEffect, useState } from 'react'
import './Series.scss'

function Series() {
    const [series, setSeries] = useState([])

    useEffect(() => {
        fetchSeries()
    }, [])

    async function fetchSeries() {
        const url = 'https://moviesdatabase.p.rapidapi.com/titles?list=most_pop_series&limit=6';
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
          setSeries(result.results);
        } catch (error) {
          console.error(error);
        }
      }
      

    console.log(series)
    return (
        <div>
            <div className='series-section'>
                <div className="series-heading">
                    <i className="fas fa-wifi" style={{ transform: 'rotate(45deg)', fontSize: '20px' }}></i>
                    <span>Most Popular Series</span>
                </div>
                <div className='series-movies-comtainer'>

                    {series.map((movie, index) => (
                        <div key={index}>
                            <img className="movie-image" src={movie.primaryImage?.url} alt={movie.titleText?.text} />
                            <p className='movie-title'>{movie.titleText?.text}</p>
                            <p className='movie-year'>{movie.releaseYear?.year}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Series
