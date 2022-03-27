import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getUser } from '../services/userAPI';
import { HeaderContainer } from '../pages/styled';

export default class Header extends Component {
  state = {
      loading: true,
      userName: '',
  };

  componentDidMount() {
    getUser()
      .then((res) => this.setState({ userName: res.name }))
      .then(() => this.setState({ loading: false }));
  }

  render() {
    const { userName, loading } = this.state;
    return (
      <HeaderContainer>
        <header>
          {loading
            ? <p>Carregando...</p>
            : <h1>{userName}</h1>}
        </header>
        <nav>
          <Link to="/search">Pesquisar</Link>
          <Link to="/favorites">Favoritas</Link>
          <Link to="/profile">Perfil</Link>
        </nav>
      </HeaderContainer>
    );
  }
}
