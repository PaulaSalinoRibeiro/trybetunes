import React, { Component } from 'react';
import PropType from 'prop-types';
import { FaRegStar } from 'react-icons/fa';
import { Tracks } from '../styles/styled';
import { addSong, getFavoriteSongs, removeSong } from '../services/favoriteSongsAPI';

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

  addFavoriteSong = async (track) => {
    this.setState({ isLoading: true });
    await addSong(track);
    this.setState({ isLoading: false, isChecked: true });
  }

  removeFavoriteMusic = async (track) => {
    const { removeMusic } = this.props;
    this.setState({ isLoading: true });
    await removeSong(track);
    if (typeof removeMusic === 'function') removeMusic(track);
    this.setState({ isLoading: false, isChecked: false });
  }

  handleChange = (event) => {
    const { target: { checked } } = event;
    const { track } = this.props;
    if (checked) {
      this.addFavoriteSong(track);
    } else {
      this.removeFavoriteMusic(track);
    }
  }

  render() {
    const { track: { trackName, previewUrl } } = this.props;
    const { isLoading, isChecked } = this.state;
    return (
      <>
        {isLoading
          ? <p>Carregando...</p>
          : (
            <Tracks>
              <span>{trackName}</span>
              <div>
                <audio src={ previewUrl } controls>
                  <track kind="captions" />
                </audio>
                <label htmlFor="favorites">
                  <FaRegStar/>
                  <input
                    id="favorites"
                    type="checkbox"
                    checked={ isChecked }
                    onChange={
                      (event) => { this.handleChange(event); }
                    }
                  />
                </label>
              </div>
            </Tracks>
          )}
      </>
    );
  }
}

MusicCard.propTypes = {
  track: PropType.shape({
    trackName: PropType.string,
    previewUrl: PropType.string,
  }),
  removeMusic: PropType.func,
}.isRequired;
