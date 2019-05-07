import React from 'react';

import { additional } from '../../datashapes';

const additionalKeys = Object.keys(additional);

const Additional = ({ number, handleChange }) => (
  <div className='additional_info'>
    {
      additionalKeys.map((element) => (
        <input
        key={element + '-' + number}
        type='text'
        id={number - 1}
        name={element}
        onChange={handleChange}
        className='form-input-line'
        ></input>
      ))
    }
  </div>
);

export default Additional;