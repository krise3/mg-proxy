import React from 'react';

import Album from './Album';

const AlbumList = ({ albumList }) => (
  <div>
    {albumList.map(album => {
      <Album album={album} />
    })}
  </div>
)