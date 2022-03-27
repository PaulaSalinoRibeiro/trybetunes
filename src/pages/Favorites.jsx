import React, { Component } from 'react';
import Header from '../component/Header';
import { getFavoriteSongs } from '../services/favoriteSongsAPI';
import MusicCard from '../component/MusicCard';
import { Container, Tracks } from '../pages/styled'

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

  removeMusic = (track) => {
    this.setState({ isLoading: true });
    const { favorites } = this.state;
    const filteredMusics = favorites.filter((music) => music !== track);
    this.setState({ favorites: filteredMusics, isLoading: false });
  }

  renderListOfMusic = () => {
    const { favorites } = this.state;
    return (
      <Tracks>
        {favorites.map((music) => (
          <section key={ music.trackName }>
            <MusicCard
              track={ music }
              removeMusic={ this.removeMusic }
            />
          </section>
        ))}
      </Tracks>
    );
  }

  render() {
    const { isLoading } = this.state;
    return (
      <Container>
        <Header />
        {isLoading
          ? <p>Carregando...</p>
          : this.renderListOfMusic()}
      </Container>
    );
  }
}
