import React from 'react';

import { song } from '../../datashapes';

const songKeys = Object.keys(song);

const Song = ({ number, handleChange }) => (
  <div
  key={'song-' + number}
  className='song-flexbox'
  ><div className='song-number-round'>{number}</div>
    {songKeys.map((key, index) => {
      return (
        <div className={key}>
          <label
          key={'song-' + index}
          className='songs'
          >{song[key] + ' '}
          </label>
          <input
          type='text'
          name={key}
          key={key + '-' + index}
          id={number - 1}
          classname={'song-input'}
          onChange={handleChange}
          ></input>
        </div>
      );
    })}
  </div>
);

export default Song;