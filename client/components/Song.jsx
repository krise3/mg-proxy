import React from 'react';

const Song = ({ song, number }) => (
  <div key={'song-' + number}>{number + ': '}
    <label>Title
      <input type='text' name='title'></input>
    </label>
    <label>Song Artist
      <input type='text' name='song-artist'></input>
    </label>
    <label>Duration
      <input type='text' name='duration'></input>
    </label>
  </div>
);

export default Song;