import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { createUser } from '../services/userAPI';
import '../component/css/login.css';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDisable: true,
      loging: false,
      isRedirect: false,
      name: '',
    };
  }

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
      <div data-testid="page-login">
        <label htmlFor="name">
          <input
            id="name"
            data-testid="login-name-input"
            value={ name }
            name="name"
            onChange={ this.handleChange }
          />
        </label>
        <button
          data-testid="login-submit-button"
          type="submit"
          disabled={ isDisable }
          onClick={ this.handleClick }
        >
          Entrar
        </button>
      </div>
    );
  }

  render() {
    const { loging, isRedirect } = this.state;
    return (
      <div className="loging">
        {loging
          ? <p>Carregando...</p>
          : this.renderInput()}
        {isRedirect && <Redirect to="/search" />}
      </div>
    );
  }
}
