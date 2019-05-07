import React from 'react';

const Searchbar = ({ queryHandler }) => (
  <div
  id="search-bar"
  style={{
    display: "flex",
    alignContent: "middle",
    justifyContent: "center", 
  }}>
    <div id='wrapper-select'>
      <select>
        <option value="label">Label</option>
        <option value="album_artist">Album Artist</option>
        <option value="published">Date</option>
        <option value="title">Title</option>
      </select>
    </div>
    <input type="text" name="query" id='search-input'></input>
    <button onClick={queryHandler}>Query</button>
  </div>
);

export default Searchbar;