import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import TunesContext from '../context/TunesContext';

import {NavBar} from '../styles/Header';

function Header() {
  const {user} = useContext(TunesContext);
  
  return (
    <NavBar>
      <nav>
        <Link to="/search">Search</Link>
        <Link to="/favorites">Favorites</Link>
        <Link to="/profile">Profile</Link>
      </nav>
      <span>{user.email}</span>
    </NavBar>
  )
}

export default Header
