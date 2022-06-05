import React, {useContext} from 'react';
import TunesContext from '../context/TunesContext';

import Header from '../components/Header';

import {Container, Cards, Title} from '../styles/Favorites'; 

function Favorites() {
  const {favorites, setFavorites} = useContext(TunesContext);

  const handleChange = (track) => {
    const newFavorites = favorites.filter(item => item.trackId !== track);
    setFavorites(newFavorites);
  }

  return (
    <Container>
      <Header />
      <h1>Favorites</h1>
      <Cards>
      {
        favorites?.map(({trackId, trackName, previewUrl}) => (
          <div key={trackId}>
            <Title>
              <h3>{trackName}</h3>
            </Title>
             <audio src={ previewUrl } controls>
               <track kind="captions" />
             </audio>
             <label htmlFor={trackId}>
               <input
                 id={trackId} 
                 type="checkbox"
                 checked="true"
                 onChange={() => handleChange(trackId)}
               />
             </label>
          </div> 
        ))
      }
      </Cards>
    </Container>
  )
}

export default Favorites;