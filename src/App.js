import React, { useState, createContext } from 'react';
import ListCountries from './components/ListCountries';

const GLOBAL_STATE = {
  countries: [],
  favorites: [],
};

export const GlobalContext = createContext();

const App = () => {
  const [state, setState] = useState([]);

  return (
    <GlobalContext.Provider value={{ state, setState }}>
      <ListCountries></ListCountries>
    </GlobalContext.Provider>
  );
};

export default App;
