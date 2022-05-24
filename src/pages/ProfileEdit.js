import React, {useContext} from 'react';
import { useHistory } from 'react-router-dom';
import TunesContext from '../context/TunesContext';

function ProfileEdit() {
  const { user, setUser } = useContext(TunesContext);
  const history = useHistory();

  const handleChange = ({target: {name, value}}) => {
    setUser((prev) => ({...prev, [name]: value }))
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const validateEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(user.email);
    if(validateEmail) {
      history.push('/profile')
    }
  }

  return(
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="image">
          Image:
          <input id="image" type="text" name="image" value={user.image} onChange={handleChange} />
        </label>
        <label htmlFor="email">
          Email:
          <input id="email"type="text" name="email" value={user.email} onChange={handleChange}/>
        </label>
        <label htmlFor="description">
          Description:
          <textarea id="description"type="text" name="description" value={user.description} onChange={handleChange}/>
        </label>
        <button type="submit" onClick={handleSubmit}>Save</button>
      </form>
    </>
  )
}

export default ProfileEdit;