import React from 'react';
import spinner from '../loader.svg';
import './Loader.css';

const Loader = () => {
  return (
    <div className='loader'>
      <img src={spinner} alt='Loading...' />
    </div>
  );
};

const center = {
  display: 'grid',
  placeItems: 'center',
};

export default Loader;
