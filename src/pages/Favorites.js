import React, {useContext} from 'react';
import TunesContext from '../context/TunesContext';

import Header from '../components/Header';

function Favorites() {
  const {favorites, setFavorites} = useContext(TunesContext);

  const handleChange = (track) => {
    const newFavorites = favorites.filter(item => item.trackId !== track);
    setFavorites(newFavorites);
  }

  return (
    <>
      <Header />
      <h1>Favorites</h1>
      {
        favorites?.map(({trackId, trackName, previewUrl}) => (
          <div key={trackId}>
             <h3>{trackName}</h3>
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
    </>
  )
}

export default Favorites;