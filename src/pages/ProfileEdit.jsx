import React, { Component } from 'react';
import Header from '../component/Header';
import { getUser } from '../services/userAPI';

export default class ProfileEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      isDisable: true,
      infoUser: undefined,
      inputFomr: undefined,
    };
  }

  componentDidMount() {
    this.getInfoUser();
  }

  getInfoUser = async () => {
    const infoUser = await getUser();
    this.setState({ isLoading: false, infoUser });
  }

  validated = () => {
    const { inputFomr } = this.state;
    //
  }

  handleChange = ({ target }) => {
    const { name } = target;
    const value = (target.type === 'checked') ? target.checked : target.value;
    this.setState({ inputFomr: { [name]: value } }, this.validated());
  }

  handleClick = (event) => {
    event.preventDefault();
  }

  renderForms = () => {
    const { infoUser, isDisable } = this.state;
    return (
      <form>
        <label htmlFor="name">
          Nome:
          <input
            onChange={ this.handleChange }
            id="name"
            type="text"
            name="name"
            value={ infoUser.name }
            data-testid="edit-input-name"
          />
        </label>
        <label htmlFor="email">
          Email:
          <input
            onChange={ this.handleChange }
            id="email"
            type="text"
            name="email"
            value={ infoUser.email }
            data-testid="edit-input-email"
          />
        </label>
        <label htmlFor="description">
          Descrição:
          <textarea
            onChange={ this.handleChange }
            id="description"
            type="text"
            name="description"
            valeu={ infoUser.description }
            data-testid="edit-input-description"
          />
        </label>
        <label htmlFor="image">
          Imagem:
          <input
            onChange={ this.handleChange }
            id="image"
            type="text"
            name="image"
            value={ infoUser.image }
            data-testid="edit-input-image"
          />
        </label>
        <button
          onClick={ this.handleClick }
          disable={ isDisable }
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
