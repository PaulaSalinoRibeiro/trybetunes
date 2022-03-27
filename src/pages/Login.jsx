import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { createUser } from '../services/userAPI';
import { Form, Container } from './styled';

export default class Login extends Component {
  state = {
      isDisable: true,
      loging: false,
      isRedirect: false,
      name: '',
    };

  componentDidUpdate() {
    const { loging } = this.state;
    if (loging === true) {
      this.setUser();
    }
  }

  handleClick = (event) => {
    event.preventDefault();
    this.setState({ loging: true });
  }

  handleChange = (event) => {
    const { target: { value } } = event;
    this.setState({ name: value }, () => this.validadedInput());
  }

  async setUser() {
    const { name } = this.state;
    await createUser({ name });
    this.setState({ isRedirect: true, loging: false });
  }

  validadedInput = () => {
    const { name } = this.state;
    const MIN_LENGTH = 3;
    if (name.length >= MIN_LENGTH) {
      this.setState({ isDisable: false });
    } else {
      this.setState({ isDisable: true });
    }
  }

  renderInput = () => {
    const { name, isDisable } = this.state;
    return (
      <Form>
        <label htmlFor="name">
          <input
            id="name"
            value={ name }
            name="name"
            onChange={ this.handleChange }
          />
        </label>
        <button
          type="submit"
          disabled={ isDisable }
          onClick={ this.handleClick }
        >
          Entrar
        </button>
      </Form>
    );
  }

  render() {
    const { loging, isRedirect } = this.state;
    return (
      <Container>
        {loging
          ? <p>Carregando...</p>
          : this.renderInput()}
        {isRedirect && <Redirect to="/search" />}
      </Container>
    );
  }
}
