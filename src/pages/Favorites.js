import React, {useContext} from 'react';
import TunesContext from '../context/TunesContext';
import TrackCard from '../components/TrackCard';

function Favorites() {
  const {favorites} = useContext(TunesContext);
  return (
    <>
      <h1>Favorites</h1>
      {
        favorites?.map((track) => <TrackCard track={track} key={track.trackId} />)
      }
    </>
  )
}

export default Favorites;