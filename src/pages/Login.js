import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import * as Emailvalidator from './emailvalidator';

function Login() {
  const history = useHistory();
  const [user, setUser] = useState({email: "", password: "",});
  const [disabled, setDisabled] = useState(true);
  
  const handleChange = (event) => {
    const {target: { name, value } } = event;
    setUser((prev) => ({ ...prev, [name]: value } ))
    const isEmail = Emailvalidator.validade(user.email);
    setDisabled(isEmail);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
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
