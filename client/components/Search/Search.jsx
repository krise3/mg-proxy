import React from 'react';

import Searchbar from './Searchbar';

const Search = ({ queryHandler, changeView }) => (
  <div id='search-view'>
    <Searchbar queryHandler={queryHandler} />
    <button onClick={changeView} className='INSERT'>Contribute an album</button>
  </div>
);

export default Search;