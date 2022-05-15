import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getUser} from '../services/LocalStore';

function Header() {
  const [user, setUser] = useState('');
  useEffect(() =>{
    const {email} = getUser();
    setUser(email);
  }, [])

  return (
    <header>
      <nav>
        <Link to="/search">Pesquisar</Link>
        <Link to="/favorites">Favoritas</Link>
        <Link to="/profile">Perfil</Link>
      </nav>
      <span>
        {
          user
        }
      </span>
    </header>
  )
}

export default Header
