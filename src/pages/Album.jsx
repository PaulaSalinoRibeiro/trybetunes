import React, { Component } from 'react';
import PropType from 'prop-types';
import Header from '../component/Header';
import MusicCard from '../component/MusicCard';
import getMusics from '../services/musicsAPI';
import { Container, Main } from './styled';

export default class Album extends Component {
  state = {
      tracks: [],
      colection: undefined,
  };

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
      <div>
        <h3>{colection.artistName}</h3>
        <h4>{colection.collectionName}</h4>
        <img src={ colection.artworkUrl100 } alt={ colection.collectionName } />
        {tracks.map((track) => (
          <section
            key={ track.trackName }
          >
            <MusicCard track={ track } />
          </section>
        ))}
      </div>
    );
  }

  render() {
    const { tracks } = this.state;
    return (
      <Container>
        <Header />
        <Main>
          {tracks.length === 0 ? <p>Carregando...</p> : this.renderTracks()}
        </Main>
      </Container>
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
