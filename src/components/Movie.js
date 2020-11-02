import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Movie.css';

let IMG_API = 'https://image.tmdb.org/t/p/w1280';

const setVoteClass = (vote) => {
  if (vote >= 8) {
    return 'green';
  } else if (vote >= 6) {
    return 'orange';
  } else {
    return 'red';
  }
};

const Movie = ({
  title,
  poster_path,
  vote_average,
  id,
  setMovie,
}) => {
  return (
    <div className='movie'>
      <Link to={`/search/${id}`} onClick={() => setMovie(id)}>
        <img
          src={
            poster_path
              ? IMG_API + poster_path
              : 'https://images.unsplash.com/photo-1594909122845-11baa439b7bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60'
          }
          alt={title}
        />

        <div className='movie-info'>
          <h3>{title}</h3>
          <span className={`tag ${setVoteClass(vote_average)}`}>
            {vote_average}
          </span>
        </div>
      </Link>
    </div>
  );
};

Movie.propTypes = {
  title: PropTypes.string.isRequired,
  poster_path: PropTypes.string.isRequired,
  vote_average: PropTypes.number.isRequired,
};

Movie.defaultProps = {
  title: 'No Movie found',
  poster_path:
    'https://images.unsplash.com/photo-1594322436404-5a0526db4d13?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
  vote_average: 404,
};

export default Movie;
