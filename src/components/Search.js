import React, { useState } from 'react';
import './Search.css';

const Search = () => {
  const [text, setText] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(`Submit`);
    setText('');
  };

  return (
    <div className='search'>
      <form onSubmit={onSubmit}>
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
