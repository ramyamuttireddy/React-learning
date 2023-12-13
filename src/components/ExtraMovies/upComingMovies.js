import React, { useEffect } from 'react'
import { useState } from 'react'
import './upComing.scss'

function UpComingMovies() {
    const [upComingMovies, setUpComingMovies] = useState([])

    useEffect(()=>{
        fetchUpComingMovies() 
    },[])


  async function fetchUpComingMovies(){
    const url = 'https://moviesdatabase.p.rapidapi.com/titles/x/upcoming?limit=6';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '588b5ef536msh4ffd5c28af55bb0p1ee87fjsn22c43028640d',
            'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        setUpComingMovies(result.results)
    } catch (error) {
        console.error(error);
    }

}

const alternateImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1wQgRO4sXtB0xFxg8zMbBdeNH-P0ltE4wug&usqp=CAU"
    return (
        <div className='upcoming-movie-section'>
            <div className="upcoming-heading">
            <i className="fas fa-wifi" style={{ transform: 'rotate(45deg)' , fontSize:'20px' }}></i>
            <span>UpComing Movies</span>
            </div>
             <div className='upcoming-movies-comtainer'>
            
          {upComingMovies.map((movie,index)=> (
            <div key={index}>
                <img  className="movie-image" src={movie.primaryImage?.url  || alternateImage} alt={movie.titleText?.text}/>
                <p className='movie-title'>{movie.titleText?.text}</p>
                <p className='movie-year'>{movie.releaseYear?.year}</p>
            </div>
          ))}
         </div>
        </div>
    )
}

export default UpComingMovies
