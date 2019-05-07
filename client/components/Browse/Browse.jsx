import React from 'react';

const Browse = ({ albumList, changeView }) => {
  if (albumList.length === 0) {
    return (
      <div>
        <h3>No search results</h3>
        <button onClick={changeView} className='SEARCH'>Back to Search</button>
      </div>
    );
  } else {
    return (
      <div>
        <button onClick={changeView} className='SEARCH'>Back to Search</button>
      </div>
    );
  }
};

export default Browse;