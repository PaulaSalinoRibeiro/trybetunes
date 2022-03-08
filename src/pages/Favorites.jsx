import React, { Component } from 'react';
import Header from '../component/Header';
import { getFavoriteSongs } from '../services/favoriteSongsAPI';
import MusicCard from '../component/MusicCard';

export default class Favorites extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      favorites: [],
    };
  }

  componentDidMount() {
    this.favoritesMusics();
  }

  favoritesMusics = async () => {
    const musics = await getFavoriteSongs();
    this.setState({ favorites: musics, isLoading: false });
  }

  renderListOfMusic = () => {
    const { favorites } = this.state;
    return (
      <section>
        {favorites.map((music) => (
          <section key={ music.trackName }>
            <MusicCard track={ music } />
          </section>
        ))}
      </section>
    );
  }

  render() {
    const { isLoading } = this.state;
    return (
      <div data-testid="page-favorites">
        <Header />
        {isLoading
          ? <p>Carregando...</p>
          : this.renderListOfMusic()}
      </div>
    );
  }
}
