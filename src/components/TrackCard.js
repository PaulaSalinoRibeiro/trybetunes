import React, {useState, useContext} from 'react';
import TunesContext from '../context/TunesContext';


function TrackCard({track}) {
  const {favorites, setFavorites} = useContext(TunesContext);
  const [check, setCheck] = useState(false);
  
  const handleChange = () => {
    setCheck(!check);
    if (!favorites.some(song => song.trackId === track.trackId)) {
      setFavorites([...favorites, track]);
    };
    if (check === true) {
      const removeTrack = favorites.filter(song => song.trackId !== track.trackId);
      setFavorites(removeTrack);
    };
  };

  return (
    <div>
      <h1>Hello TrackCard</h1>
      <p>{track.trackName}</p>
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
    </div>           
  )
}

export default TrackCard;