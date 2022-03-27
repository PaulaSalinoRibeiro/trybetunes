import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Header from '../component/Header';
import { getUser, updateUser } from '../services/userAPI';
import { Form,  Container } from './styled';

export default class ProfileEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      isRedirect: false,
      isDisable: true,
      infoUser: {
        name: '',
        email: '',
        image: '',
        description: '',
      },
    };
  }

  componentDidMount() {
    this.getInfoUser();
  }

  getInfoUser = async () => {
    const info = await getUser();
    this.setState({ infoUser: info, loading: false }, () => this.validated());
  }

  handleClick = (event) => {
    event.preventDefault();
    const { infoUser } = this.state;
    updateUser(infoUser);
    this.setState({ isRedirect: true });
  }

  handleChange =({ target }) => {
    const { name, value } = target;
    this.setState((prev) => ({ infoUser: { ...prev.infoUser, [name]: value } }),
      () => this.validated());
  }

  validated = () => {
    const { infoUser: { name, email, description, image } } = this.state;
    const allInputs = [name, email, description, image];
    const isEmpty = allInputs.every((input) => input !== '');
    const regexEmail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/; // ref: https://regexr.com/3e48o
    const validatedEmail = regexEmail.test(email);
    const isValid = isEmpty && validatedEmail;
    if (isValid) {
      this.setState({ isDisable: false });
    } else {
      this.setState({ isDisable: true });
    }
  }

  renderForm = () => {
    const {
      infoUser: { name, email, image, description },
      isRedirect,
      isDisable } = this.state;
    return (
      <div>
        <Form>
          <label htmlFor="name">
            Nome:
            {' '}
            <input
              id="name"
              type="text"
              name="name"
              value={ name }
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="email">
            Email:
            {' '}
            <input
              id="email"
              type="text"
              name="email"
              value={ email }
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="image">
            Imagem:
            {' '}
            <input
              id="image"
              type="text"
              name="image"
              value={ image }
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="description">
            Descrição:
            {' '}
            <input
              id="description"
              type="text"
              name="description"
              value={ description }
              onChange={ this.handleChange }
            />
          </label>
          <button
            type="submit"
            disabled={ isDisable }
            onClick={ this.handleClick }
            onChange={ this.handleChange }
          >
            Salvar
          </button>
        </Form>
        {isRedirect && <Redirect to="/profile" />}
      </div>
    );
  }

  render() {
    const { loading } = this.state;
    return (
      <Container>
        <Header />
        {loading
          ? <p>Carregando...</p>
          : this.renderForm()}
      </Container>
    );
  }
}
