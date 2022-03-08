import React, { Component } from 'react';
import Header from '../component/Header';
import { getUser } from '../services/userAPI';

export default class ProfileEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      infoUser: undefined,
    };
  }

  componentDidMount() {
    this.getInfoUser();
  }

  getInfoUser = async () => {
    const infoUser = await getUser();
    this.setState({ isLoading: false, infoUser });
  }

  renderForms = () => {
    const { infoUser } = this.state;
    return (
      <form>
        <label htmlFor="name">
          Nome:
          <input
            id="name"
            type="text"
            name="name"
            placeholder={ infoUser.name }
            data-testid="edit-input-name"
          />
        </label>
        <label htmlFor="email">
          Email:
          <input
            id="email"
            type="text"
            name="email"
            placeholder={ infoUser.email }
            data-testid="edit-input-email"
          />
        </label>
        <label htmlFor="description">
          Descrição:
          <textarea
            id="description"
            type="text"
            name="description"
            placeholder={ infoUser.description }
            data-testid="edit-input-description"
          />
        </label>
        <img
          id="image"
          src={ infoUser.image }
          alt="profile"
          data-testid="edit-input-image"
        />
        <button
          type="submit"
          data-testid="edit-button-save"
        >
          Salvar
        </button>
      </form>
    );
  }

  render() {
    const { isLoading } = this.state;
    return (
      <div data-testid="page-profile-edit">
        <Header />
        {isLoading ? <p>Carregando...</p> : this.renderForms()}
      </div>
    );
  }
}
