import React from 'react';

const Searchbar = ({ queryHandler }) => (
  <div
  id="search-bar"
  style={{
    display: "flex",
    alignContent: "middle",
    justifyContent: "center", 
  }}>
    <select>
      <option value="label">Label</option>
      <option value="album_artist">Album Artist</option>
      <option value="published">Date</option>
      <option value="title">Title</option>
    </select>
    <input type="text" name="query"></input>
    <button onClick={queryHandler}>Query</button>
  </div>
);

export default Searchbar;