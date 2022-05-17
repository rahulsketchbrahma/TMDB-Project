import React from 'react';
import '../../App.css';
import Banner from '../Banner/Index';
import Row from '../../Components/Row/Index';
import requests from '../../constants';
import Navbar from '../../Components/Navbar/Index';



function Home() {
  return (
    <div className="home">
    
    <Navbar/>
           <Banner fetchRandom={requests.fetchTrending} />
      <Row title="Trending now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
      

    </div>
  );
}

export default Home;