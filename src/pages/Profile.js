import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import TunesContext from '../context/TunesContext';
import Header from '../components/Header';

import {Container, IconUser} from '../styles/Profile'

function Profile() {
  const { user } = useContext(TunesContext);
  return (
    <Container>
      <Header />
      <div>
        { user.image ? <img src={user.image} alt={user.name} /> : <IconUser/> }
        <h2>{user.name}</h2>
        <h3>{user.email}</h3>
        <p>{user.description}</p>
        <button type="button">
          <Link to="/profile/edit">Edit Profile</Link>
        </button>
      </div>
    </Container>
  )
}

export default Profile;