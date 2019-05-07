import React from 'react';

import Searchbar from './Searchbar';

const Search = ({ queryHandler, changeView }) => (
  <div id='search-view'>
    <h1 id='search-text-logo'>m e t a - g e t t a</h1>
    <Searchbar queryHandler={queryHandler} />
    <button onClick={changeView} className='INSERT' id='button-contribute'>Contribute album metadata</button>
  </div>
);

export default Search;