import React from 'react';

import { additional } from '../../datashapes';

const additionalKeys = Object.keys(additional);

const Additional = ({ number, handleChange }) => (
  <div className='additional_info base-flexrow'>
    {
      additionalKeys.map((element, index) => (
        <input
        key={element + '-' + number}
        type='text'
        id={number - 1}
        name={element}
        onChange={handleChange}
        className={index !== 0 ? 'form-input-line-a' : 'form-label'}
        ></input>
      ))
    }
  </div>
);

export default Additional;