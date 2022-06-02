import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import TunesContext from '../context/TunesContext';

import { Container, Title, Form } from '../styles/Login';

function Login() {
  const history = useHistory();
  const { user, setUser } = useContext(TunesContext);
  const [disabled, setDisabled] = useState(true);
  
  const handleChange = (event) => {
    const {target: { name, value } } = event;
    setUser((prev) => ({ ...prev, [name]: value } ))
    const validateEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(user.email);
    setDisabled(!validateEmail);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    history.push('/search');
  }

  return (
    <Container>
      <Title>Login</Title>
      <Form onSubmit={handleSubmit}>
        <label htmlFor="email">
          Email:
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="password">
          Password:
          <input
            type="password"
            name="password"
            value={user.password}
            onChange={handleChange}
          />
        </label>
        <button
          type="submit"
          disabled={disabled}
          onSubmit={handleSubmit}
        >
          Send
        </button>
      </Form>
    </Container>
  )
}

export default Login;
