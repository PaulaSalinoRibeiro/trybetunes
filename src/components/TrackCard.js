import React, {useState} from 'react';

function TrackCard(props) {
  const [check, setCheck] = useState(false);
  const {track} = props;
  
  const handleChange = ({target}) => {
    console.log(target.id);
  }

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