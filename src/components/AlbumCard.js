import React from 'react';
import { Link } from 'react-router-dom';

import {Container} from '../styles/AlbumCard';

function AlbumCard(props) {
  const {collection} = props
  return (
    <Container>
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
    </Container>
  )
}

export default AlbumCard;
