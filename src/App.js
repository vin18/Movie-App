import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Search from './components/Search';
import Loader from './components/Loader';

const FEATURED_API = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${process.env.REACT_APP_FEATURE_API_KEY}`;

const SEARCH_API = `https://api.themoviedb.org/3/search/movie?&api_key=${process.env.REACT_APP_SEARCH_API_KEY}`;

const App = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchMovies(FEATURED_API);
  }, []);

  const fetchMovies = async (API) => {
    setLoading(true);
    const moviesResp = await fetch(API);
    const movies = await moviesResp.json();
    setMovies(movies.results);
    setLoading(false);
  };

  return (
    <div>
      <Navbar />
      <div className='container'>
        <Search />
        {loading ? <Loader /> : <h1>Movies</h1>}
      </div>
    </div>
  );
};

export default App;
