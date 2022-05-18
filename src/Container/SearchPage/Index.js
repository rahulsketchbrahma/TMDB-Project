import React from 'react';
import {useState} from "react";
import axios from 'axios';
import './Search.css';
import {Link} from 'react-router-dom';

function Search() {

  const [searchValue,setSearchValue] = useState('');
  const [searchedmovies,setSearchedMovies] = useState([]);
 
   const BaseUrl = "https://api.themoviedb.org/3";

   async function handleonSubmit(e){
      e.preventDefault();
      const search = `${BaseUrl}/search/multi?api_key=8612aaeb857886e801ddfca868da9cf3&language=en-US&query=${searchValue}&`;
      const response = await axios.get(search);
      setSearchedMovies(response.data.results)
      console.log(response.data.results)
    }
    return(
    <>
    
      <div className="search-page">
      <div className="search-wrapper">
      <div className="search">
        <form onSubmit={handleonSubmit}>
        <input 
          type='search' 
          placeholder='Search'
          className='search-bar '
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)} ></input> 
        </form>
        </div>
        <div className="fade-bottom"/>
      </div>
      <div className='Results-wrapper'> 
        <div className='Results' >
        <div className="fade-up"/>
        <div className="Results_container">
        {
        searchedmovies?.map((movie, id) =>(
          <div key={movie.id} className="Results_posterr">
             <img 
          key={id}
          className="Results_poster"
          src={`https://image.tmdb.org/t/p/original/${movie?.poster_path}`}
          alt={movie.name}
          /> 
          <div className='Overlay'>
            <div className='Content'>
            <Link to={`/Moviedetails/${movie.id}`}><button type="text" className='row-button'>View More</button></Link>
            </div>    
          </div>
          </div>
              ))}
            
            </div>
        </div>
      </div>
      </div>
      </>);
      }
export default Search;