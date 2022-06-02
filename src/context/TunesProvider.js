import TunesContext from './TunesContext';
import { useState } from 'react';

function TunesProvider({children}) {
  const [user, setUser] = useState({email: "", password: "", image: "", description: "",});
  const [favorites, setFavorites] = useState([]);


  const state = {
    user,
    setUser,
    favorites,
    setFavorites,
  };

  return (
    <TunesContext.Provider value={state}>
      {children}
    </TunesContext.Provider>
  )
};

export default TunesProvider;