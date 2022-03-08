import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getUser } from '../services/userAPI';
import './css/header.css';

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      userName: '',
    };
  }

  componentDidMount() {
    getUser().then((res) => this.setState({ userName: res.name }))
      .then(() => this.setState({ loading: false }));
  }

  render() {
    const { userName, loading } = this.state;
    return (
      <div>
        <header
          data-testid="header-component"
        >
          {loading
            ? <p>Carregando...</p>
            : <h1 data-testid="header-user-name" className="user">{userName}</h1>}
        </header>
        <nav className="nav-bar">
          <Link to="/search" data-testid="link-to-search">Pesquisar</Link>
          <Link to="/favorites" data-testid="link-to-favorites">Favoritas</Link>
          <Link to="/profile" data-testid="link-to-profile">Perfil</Link>
        </nav>
      </div>
    );
  }
}
