import React, { useState, useEffect } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import Navbar from './components/Navbar';
import Search from './components/Search';
import Loader from './components/Loader';
import Movie from './components/Movie';
import MovieItem from './components/MovieItem';

let featureApiKey;
let searchApiKey;

if (process.env.NODE_ENV !== 'production') {
  featureApiKey = `${process.env.REACT_APP_FEATURE_API_KEY}`;
  searchApiKey = `${process.env.REACT_APP_SEARCH_API_KEY}`;
} else {
  featureApiKey = `${process.env.FEATURE_API_KEY}`;
  searchApiKey = `${process.env.SEARCH_API_KEY}`;
}

const FEATURED_API = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${featureApiKey}`;
const SEARCH_API = `https://api.themoviedb.org/3/search/movie?&api_key=${process.env.REACT_APP_SEARCH_API_KEY}&query=${searchApiKey}`;

const App = () => {
  const [movies, setMovies] = useState([]);
  const [movieInfo, setMovieInfo] = useState({});
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (search) {
      fetchMovies(SEARCH_API + search);
    } else {
      fetchMovies(FEATURED_API);
    }
  }, [search]);

  const fetchMovies = async (API) => {
    setLoading(true);
    const moviesResp = await fetch(API);
    const movies = await moviesResp.json();
    setMovies(movies.results);
    setLoading(false);
  };

  return (
    <Router>
      <Navbar />
      <div className='container'>
        <Switch>
          <Route path='/' exact>
            <Search setSearch={setSearch} />
            {loading ? (
              <Loader />
            ) : (
              <div className='movie-container'>
                {movies.length > 0 &&
                  movies.map((movie) => (
                    <Movie
                      key={movie.id}
                      {...movie}
                      setMovie={setMovieInfo}
                    />
                  ))}
              </div>
            )}
          </Route>

          <Route path={`/search/:id`}>
            <MovieItem
              movie={
                movies.length > 0 &&
                movies.find((m) => m.id === movieInfo)
              }
            />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
