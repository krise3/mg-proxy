import React from 'react';

import AlbumList from './AlbumList';

const Browse = ({ albumList, changeView }) => {
  if (albumList.length === 0) {
    return (
      <div className='browse-view'>
        <h3>No search results</h3>
        <button onClick={changeView} className='SEARCH'>Back to Search</button>
      </div>
    );
  } else {
    console.log(albumList);
    return (
      <div className='browse-view'>
        <button onClick={changeView} className='SEARCH'>Back to Search</button>
        <AlbumList albumList={albumList} />
      </div>
    );
  }
};

export default Browse;