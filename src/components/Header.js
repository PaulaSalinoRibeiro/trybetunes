import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import TunesContext from '../context/TunesContext';

function Header() {
  const {user} = useContext(TunesContext);
  
  return (
    <header>
      <nav>
        <Link to="/search">Pesquisar</Link>
        <Link to="/favorites">Favoritas</Link>
        <Link to="/profile">Perfil</Link>
      </nav>
      <span>
        {
          user.email
        }
      </span>
    </header>
  )
}

export default Header
