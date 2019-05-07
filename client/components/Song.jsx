import React from 'react';

import { song } from '../datashapes';

const songKeys = Object.keys(song);

const Song = ({ song, number }) => (
  <div key={'song-' + number}>{number + ': '}
    {songKeys.map((key, index) => {
      return (
        <label key={'song-' + index}>{song[key]}
          <input type='text' name={key}></input>
        </label>
      );
    })}
  </div>
);

export default Song;