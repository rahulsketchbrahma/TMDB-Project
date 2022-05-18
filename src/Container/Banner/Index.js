import React,{useState, useEffect} from "react";
import axios from "axios";
import './Banner.css'
import {Link} from 'react-router-dom'


const Banner = ({fetchRandom}) => {
    const [movie, setMovie] = useState([]);

    useEffect(()=>{
        async function fetchData(){
            const request= await axios.get(fetchRandom);
            setMovie(request.data.results[
            Math.floor(Math.random() * request.data.results.length)
            ]);
              return request;
        }
        fetchData();

    },[]);
    return (
    <>
    <div className="banner"
        style={{
            backgroundSize:"cover",
            backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie.backdrop_path}")`,
            backgroundPosition: "Top center",
        }}
    >
        <div className="banner-fade-up"/>
        <div className="banner_contents">
        {/* title */}
        <h1 className="banner_title">{movie?.title || movie?.name || movie?.original_name}</h1>
        <Link to={`/Moviedetails/${movie.id}`}><button type="text" className='banner_button'>View More</button></Link>
         {/* desciption */}
        <p className="banner_description">{movie.overview}</p>
        </div>
        <div className="banner-fade-bottom"/>

    </div>
    </>
    )
   
}

export default Banner;