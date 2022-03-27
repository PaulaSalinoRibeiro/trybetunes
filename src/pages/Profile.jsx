import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../component/Header';
import { getUser } from '../services/userAPI';
import { Container, UserInfo } from './styled';
import  User  from '../assets/User.png';

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
      <UserInfo>
        <h2>{user.name}</h2>
        <img src={ user.image ? user.image : User } alt={ user.name } />
        <p>{user.email}</p>
        <p>{user.description}</p>
        <button type="button">
          <Link to="/profile/edit">Editar perfil</Link>
        </button>
      </UserInfo>
    );
  }

  render() {
    const { isLoading } = this.state;
    return (
      <Container>
        <Header />
        {isLoading
          ? <p>Carregando...</p>
          : this.renderUserInfo()}
      </Container>
    );
  }
}
