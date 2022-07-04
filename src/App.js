import React from 'react';
import './App.css';
import Row from './components/Row';
import requests from './components/requests';
import Nav from './components/Nav';
import Banner from './components/Banner';
function App() {
  
  return (
    <div className="App">
      <Nav/>
      <Banner/>
      <Row title="Netflix originals" fetchURL={requests.fetchNetflixOriginals}/>
      <Row title="Netflix Trending" fetchURL={requests.fetchTrending}/>
      <Row title="Netflix Romance" fetchURL={requests.fetchRomanceMovies}/>
      <Row title="Netflix TopRated" fetchURL={requests.fetchTopRated}/>
      <Row title="Netflix ActionMovies" fetchURL={requests.fetchComedyMovies}/>
      <Row title="Netflix ComedyMovies" fetchURL={requests.fetchComedyMovies}/>
      <Row title="Netflix HorrorMovies" fetchURL={requests.fetchHorrorMovies}/>
      <Row title="Netflix Documnetaries" fetchURL={requests.fetchDocumentaries}/>
     </div>
  );
}

export default App;
