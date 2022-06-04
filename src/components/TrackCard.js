import React, {useState, useContext} from 'react';
import TunesContext from '../context/TunesContext';

import {Container, Title} from '../styles/TrackCard';

function TrackCard({track}) {
  const {favorites, setFavorites} = useContext(TunesContext);
  const [check, setCheck] = useState(false);
  
  const handleChange = () => {
    setCheck(!check);
    if (!favorites.some(song => song.trackId === track.trackId)) {
      setFavorites([...favorites, track]);
    };
    check && setFavorites(favorites.filter(song => song.trackId !== track.trackId));
  };

  return (
    <Container>
      <Title>
        <h3>{track.trackName}</h3>
      </Title>
      <audio src={ track.previewUrl } controls>
        <track kind="captions" />
      </audio>
      <label htmlFor={track.trackId}>
        <input
          id={track.trackId} 
          type="checkbox"
          checked={check}
          onChange={handleChange}
        />
      </label>
    </Container>           
  )
}

export default TrackCard;