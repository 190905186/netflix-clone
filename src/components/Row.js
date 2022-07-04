import React, { useState,useEffect } from 'react'
import axios from 'axios'
import '../css/Row.css'

const isLargeRow=false
const base_url="https://image.tmdb.org/t/p/original"
const Row = ({title,fetchURL}) => {
    const [movies,setMovies]=useState([]);
    useEffect(() => {
      async function fetchData(){
        const response=await axios.get(`https://api.themoviedb.org/3${fetchURL}`);
        console.log(response.data.results);
        setMovies(response.data.results);
        return response
      }
      fetchData();
    }, [fetchURL])
    
  return (
    <div className='row'>
        <h2 className='rowTitle'>{title}</h2>
        <div className='row_posters'>
            {
                movies.map((movie)=>
                {
                    let src=isLargeRow?movie.poster_path:movie.backdrop_path

                    return(
                    <img key={movie.id}
                     className={`row_poster ${isLargeRow && "row_posterLarge"}`}
                     src={`${base_url}${src}`}></img>
                    )
                }
                )
            }
        </div>
    </div>
  )
}

export default Row