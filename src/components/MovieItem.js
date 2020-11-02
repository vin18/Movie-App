import React from 'react';
import { Link } from 'react-router-dom';
import './MovieItem.css';

let IMG_API = 'https://image.tmdb.org/t/p/w1280';

const MovieItem = ({ movie }) => {
  const {
    poster_path,
    title,
    original_title,
    overview,
    vote_average,
    release_date,
  } = movie;

  return (
    <>
      <Link to='/' className='back-btn'>
        <i className='fas fa-arrow-left'></i> Back
      </Link>
      <div className='movie-item'>
        <div className='movie-item__image-container'>
          <img
            src={
              poster_path
                ? IMG_API + poster_path
                : 'https://images.unsplash.com/photo-1594909122845-11baa439b7bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60'
            }
            alt={title}
            className='movie-item__image'
          />
        </div>

        <div className='movie-item__info'>
          {original_title && <h2>{original_title}</h2>}

          {overview && (
            <p>
              <span>Description</span> : {overview}
            </p>
          )}

          {vote_average && (
            <p>
              <span>Rating: </span> {vote_average}
            </p>
          )}

          {release_date && (
            <p>
              <span>Release Date: </span> {release_date}
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default MovieItem;
