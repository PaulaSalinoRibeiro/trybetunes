import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import {getMusics} from '../services/fetchAPI';
import Header from '../components/Header';
import TrackCard from '../components/TrackCard';

function Album() {
  const {id} = useParams();
  const [tracks, setTracks] = useState([]);
  const [album, setAlbum] = useState({});

  useEffect(() => {
    const fecthAPI = async () => {
      const musics = await getMusics(id);
      const albumInfo = musics.filter(music => music.kind !== 'song');
      const songs = musics.filter(music => music.kind === 'song');
      setAlbum(...albumInfo)
      setTracks(songs)
    };
    fecthAPI();
  }, []);

  return (
    <>
      <Header />
      <div>
        <h2>{album.artistName}</h2>
        <p>{album.collectionName}</p>
        <img src={album.artworkUrl100} alt={album.collectionName} />
      </div>
      <div>
        {
          tracks.map((track) => <TrackCard track={track} key={track.trackId} />)
        }
      </div>
    </>
  )
}

export default Album;
