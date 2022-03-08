import React, { Component } from 'react';
import PropType from 'prop-types';
import { addSong } from '../services/favoriteSongsAPI';

export default class MusicCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
    };
  }

  handleClick = async () => {
    this.setState({ isLoading: true });
    const { track } = this.props;
    await addSong(track);
    this.setState({ isLoading: false });
  }

  render() {
    const { track: { trackName, previewUrl, trackId } } = this.props;
    const { isLoading } = this.state;
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
                  data-testid={ `checkbox-music-${trackId}` }
                  onClick={ () => { this.handleClick(); } }
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
    trackId: PropType.string,
  }).isRequired,
};
