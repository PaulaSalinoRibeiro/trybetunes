import React from 'react';
import { Link } from 'react-router-dom';

function AlbumCard(props) {
  const {collection} = props
  return (
    <div>
      {
        collection?.map(({ collectionId, artistName, collectionName, artworkUrl100 }) => (
          <div key={collectionId}>
            <Link to={ `/album/${collectionId}` }>
              <p>{artistName}</p>
              <img src={artworkUrl100} alt={collectionName} />
              <p>{collectionName}</p>
            </Link>
          </div>
        ))
      }
    </div>
  )
}

export default AlbumCard;
