import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
// import * as Emailvalidator from 'email-validator';
import { createUser } from '../services/LocalStore';

function Login() {
  const history = useHistory();
  const [user, setUser] = useState({email: "", password: "",});
  const [disabled, setDisabled] = useState(true);
  
  const handleChange = (event) => {
    const {target: { name, value } } = event;
    setUser((prev) => ({ ...prev, [name]: value } ))
    // const isEmail = Emailvalidator.validade(user.email);
    const validateEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(user.email);
    setDisabled(!validateEmail);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    createUser({email: user.email});
    history.push('/search');
  }

  return (
    <>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
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
        >
          Send
        </button>
      </form>
    </>
  )
}

export default Login;
