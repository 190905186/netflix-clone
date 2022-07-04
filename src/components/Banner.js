import React, { useState,useEffect } from 'react'
import requests from './requests'
import '../css/Banner.css'
import axios from 'axios'
const base_url="https://image.tmdb.org/t/p/original"
 const Banner = () => {
    const [movie,setMovie]=useState([])
    useEffect(() => {
        async function fetchData(){
          const response=await axios.get(`https://api.themoviedb.org/3${requests.fetchNetflixOriginals}`);
          console.log(response.data.results);
          setMovie(response.data.results[Math.floor(Math.random()*response.data.results.length -1)]);
          return response
        }
        fetchData();
      }, [])
      function truncate(str,n)
      {
        return str?.length>n?str.substring(0,n-1)+"...":str
      }
  return (
    <header
    className='banner'
    style={{
        backgroundSize:"cover",
        backgroundImage:`url(${base_url}${movie?.backdrop_path})`,
    }}
    >
    <div className='banner_contents'>
        <h1 className='banner_title'>
            {movie?.name||movie?.title||movie?.original_name}
        </h1>
        <div className='banner_buttons'>
            <button className='banner_button1'>play</button>
            <button className='banner_button2'>More_infomp</button>
        </div>
        <h1 className='banner_description'>
            {
                truncate(movie?.overview||movie?.descrption,150)
            }
        </h1>
    </div> 
    <div className='banner_fadebottom'></div>   
    </header>

  )
}
export default Banner