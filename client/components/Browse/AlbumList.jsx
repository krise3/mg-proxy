import React from 'react';

import Album from './Album';

const AlbumList = ({ albumList }) => (
  <div style={{
    display: 'flex',
    flexFlow: 'column nowrap'
  }}
  >
    {albumList.map(album => {
      console.log(album);
      return <Album album={album} />
    })}
  </div>
);

export default AlbumList;