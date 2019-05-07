import React from 'react';

import Searchbar from './Searchbar';

const Search = ({ queryHandler }) => (
  <div>
    <Searchbar queryHandler={queryHandler} />
  </div>
);

export default Search;