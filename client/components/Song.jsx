import React from 'react';

import { song } from '../datashapes';

const songKeys = Object.keys(song);

const Song = ({ number, handleChange }) => (
  <div key={'song-' + number}>{number + ': '}
    {songKeys.map((key, index) => {
      return (
        <label
        key={'song-' + index}
        className='songs'
        >{song[key] + ' '}
          <input
          type='text'
          name={key}
          key={key + '-' + index}
          id={number - 1}
          onChange={handleChange}
          ></input>
        </label>
      );
    })}
  </div>
);

export default Song;