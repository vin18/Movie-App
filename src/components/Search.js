import React, { useState } from 'react';
import './Search.css';

const Search = ({ setSearch }) => {
  const [text, setText] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    setSearch(text);
  };

  return (
    <div className='search'>
      <form onSubmit={onSubmit}>
        <i className='fas fa-search'></i>
        <input
          type='text'
          name='text'
          placeholder='Search movie'
          value={text}
          onChange={(e) => setText(e.target.value)}
          className='search__input'
        />
      </form>
    </div>
  );
};

export default Search;
