import React from 'react';

import Searchbar from './Searchbar';

const Search = ({ queryHandler, changeView }) => (
  <div style={{ width: 'inherit' }}>
    <button onClick={changeView} className='INSERT'>Contribute an album</button>
    <Searchbar queryHandler={queryHandler} />
  </div>
);

export default Search;