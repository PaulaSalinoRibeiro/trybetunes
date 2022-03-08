import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../component/Header';
import { getUser } from '../services/userAPI';

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      user: undefined,
    };
  }

  componentDidMount() {
    this.handleUser();
  }

  handleUser = async () => {
    const user = await getUser();
    this.setState({ user, isLoading: false });
  }

  renderUserInfo = () => {
    const { user } = this.state;
    return (
      <section>
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        <p>{user.description}</p>
        <img src={ user.image } alt={ user.name } data-testid="profile-image" />
        <button type="button">
          <Link to="/profile/edit">Editar perfil</Link>
        </button>
      </section>
    );
  }

  render() {
    const { isLoading } = this.state;
    return (
      <div data-testid="page-profile">
        <Header />
        {isLoading
          ? <p>Carregando...</p>
          : this.renderUserInfo()}
      </div>
    );
  }
}
