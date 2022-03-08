import React, { Component } from 'react';
import PropType from 'prop-types';
import Header from '../component/Header';
import MusicCard from '../component/MusicCard';
import getMusics from '../services/musicsAPI';

export default class Album extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tracks: [],
      colection: undefined,
    };
  }

  componentDidMount() {
    const { match: { params: { id } } } = this.props;
    this.handleMusicsAPI(id);
  }

  componentDidUpdate() {
    const { tracks } = this.state;
    if (tracks.length > 0) {
      this.renderTracks();
    }
  }

  handleMusicsAPI = async (id) => {
    const res = await getMusics(id);
    this.setState({ colection: res[0] });
    const listOfMusic = res.filter((elem) => elem.kind === 'song');
    this.setState({ tracks: [...listOfMusic] });
  }

  renderTracks = () => {
    const { tracks, colection } = this.state;
    return (
      <section>
        <h3 data-testid="artist-name">{colection.artistName}</h3>
        <h4 data-testid="album-name">{colection.collectionName}</h4>
        <img src={ colection.artworkUrl100 } alt={ colection.collectionName } />
        {tracks.map((track) => (
          <section
            key={ track.trackName }
          >
            <MusicCard track={ track } />
          </section>
        ))}
      </section>
    );
  }

  render() {
    const { tracks } = this.state;
    return (
      <div data-testid="page-album">
        <Header />
        <main>
          {tracks.length === 0 ? <p>Carregando...</p> : this.renderTracks()}
        </main>
      </div>
    );
  }
}

Album.propTypes = {
  match: PropType.shape({
    params: PropType.shape({
      id: PropType.string,
    }),
  }).isRequired,
};
