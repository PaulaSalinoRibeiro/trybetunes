import TunesContext from './TunesContext';
import { useState } from 'react';

function TunesProvider({children}) {
  const [user, setUser] = useState({email: "", password: "",});

  const state = {
    user,
    setUser
  }
  return (
    <TunesContext.Provider value={state}>
      {children}
    </TunesContext.Provider>
  )
}

export default TunesProvider;