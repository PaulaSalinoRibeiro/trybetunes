import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../component/Header';
import searchAlbumsAPI from '../services/searchAlbumsAPI';
import { Form, Container, ColectionAlbum } from './styled';

export default class Search extends Component {
  state = {
      album: '',
      isDisable: true,
      colection: [],
      loading: false,
      artistName: undefined,
    };
  

  handleSearchAPI = async (album) => {
    const res = await searchAlbumsAPI(album);
    this.setState(
      {
        colection: [...res],
        artistName: album,
        loading: false,
      },
    );
  }

  handleClick = () => {
    const { album } = this.state;
    this.setState({ loading: true });
    this.handleSearchAPI(album);
    this.setState({ album: '' });
  }

  handleChange = (event) => {
    const { target: { value } } = event;
    this.setState({ album: value }, () => this.validadedSearch());
  }

  validadedSearch = () => {
    const { album } = this.state;
    const MIN_LENGTH = 2;
    if (album.length >= MIN_LENGTH) {
      this.setState({ isDisable: false });
    } else {
      this.setState({ isDisable: true });
    }
  }

  inputSearch = () => {
    const { album, isDisable } = this.state;
    return (
      <div>
        <label htmlFor="album">
          <input
            id="album"
            name="search"
            value={ album }
            onChange={ this.handleChange }
          />
        </label>
        <button
          type="button"
          disabled={ isDisable }
          onClick={ this.handleClick }
        >
          Pesquisar
        </button>
      </div>
    );
  }

  listOfAlbum = () => {
    const { colection } = this.state;
    return (
      <ColectionAlbum>
        {colection.map(({ artworkUrl100, collectionName, collectionId }) => (
          <section key={ collectionId }>
            <Link
              to={ `/album/${collectionId}` }
            >
              <img src={ artworkUrl100 } alt={ collectionName } />
              <h3>{collectionName}</h3>
            </Link>
          </section>
        ))}
      </ColectionAlbum>
    );
  }

  render() {
    const { loading, artistName, colection } = this.state;
    return (
      <Container>
        <Header />
        <Form>
          {loading
            ? <p>Carregando...</p>
            : this.inputSearch()}
          {colection.length !== 0
          && (
            <h3>
              Resultado de álbuns de:
              {' '}
              {artistName}
            </h3>
          )}
          {
            (artistName !== undefined && colection.length === 0)
            && <h3>Nenhum álbum foi encontrado</h3>
          }
          {colection.length > 1 && this.listOfAlbum()}
        </Form>
      </Container>
    );
  }
}
