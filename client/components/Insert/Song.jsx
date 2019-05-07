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
        <div className={key} className='songs'>
          <label
          key={'song-' + index}
          >{song[key] + ' '}
          </label>
          <input
          type='text'
          name={key}
          key={key + '-' + index}
          id={number - 1}
          className={'song-input'}
          onChange={handleChange}
          ></input>
        </div>
      );
    })}
  </div>
);

export default Song;