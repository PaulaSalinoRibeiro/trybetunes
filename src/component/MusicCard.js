import React, { Component } from 'react';
import PropType from 'prop-types';
import { addSong, getFavoriteSongs } from '../services/favoriteSongsAPI';

export default class MusicCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      isChecked: false,
      favoritesMusic: [],
    };
  }

  componentDidMount() {
    this.handleFavoritesMusics();
  }

  handleFavoritesMusics = async () => {
    this.setState({ isLoading: true });
    const musicsSaved = await getFavoriteSongs();
    this.setState({ isLoading: false, favoritesMusic: musicsSaved });
    const { favoritesMusic } = this.state;
    const { track } = this.props;
    const isFavorite = favoritesMusic.find((music) => (
      music.trackName.includes(track.trackName)
    ));
    if (isFavorite) {
      this.setState({ isChecked: true });
    }
  }

  handleChange = async () => {
    this.setState({ isLoading: true });
    const { track } = this.props;
    await addSong(track);
    this.setState({ isLoading: false, isChecked: true });
  }

  render() {
    const { track: { trackName, previewUrl, trackId } } = this.props;
    const { isLoading, isChecked } = this.state;
    return (
      <div>
        {isLoading
          ? <p>Carregando...</p>
          : (
            <section>
              <h4>{trackName}</h4>
              <audio data-testid="audio-component" src={ previewUrl } controls>
                <track kind="captions" />
              </audio>
              <label htmlFor="favorites">
                Favorita
                <input
                  id="favorites"
                  type="checkbox"
                  checked={ isChecked }
                  data-testid={ `checkbox-music-${trackId}` }
                  onChange={ () => { this.handleChange(); } }
                />
              </label>
            </section>
          )}
      </div>

    );
  }
}

MusicCard.propTypes = {
  track: PropType.shape({
    trackName: PropType.string,
    previewUrl: PropType.string,
    trackId: PropType.number,
  }).isRequired,
};
