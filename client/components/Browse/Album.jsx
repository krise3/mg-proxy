import React from 'react';

const Album = ({ album }) => (
  <div
  style={{
    display: 'flex',
    flexFlow: 'row nowrap',
    backgroundColor: '#3D0018',
    margin: '5px',
    padding: '5px'
  }}>
    <div
    style={{ flexGrow: 1 }}
    className='browse-album'
    >{album.label}</div>
    <div
    style={{ flexGrow: 1 }}
    className='browse-album'
    >{album.album_artist}</div>
    <div
    style={{ flexGrow: 2 }}
    className='browse-album'
    >{album.title}</div>
    <div
    style={{ flexGrow: 1 }}
    className='browse-album'
    >{album.published}</div>
  </div>
);

export default Album;