import React, {useState, useContext} from 'react';
import TunesContext from '../context/TunesContext';

// import {AiOutlineHeart, AiFillHeart} from 'react-icons/ai'

import {Container, Title, Icons, IconFillHeart, IconOutlineHeart} from '../styles/TrackCard';

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
      <Icons onClick={handleChange}>
        {check ? <IconFillHeart /> : <IconOutlineHeart/> }
      </Icons>
    </Container>           
  )
}

export default TrackCard;