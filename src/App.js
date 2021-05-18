import React, { useState, createContext, useEffect } from 'react';
import ListCountries from './components/ListCountries';
import ListFavorites from './components/ListFavorites';
import getFetch from './services/api';
import './App.css';

const GLOBAL_STATE = {
  countries: [],
  favorites: [],
};

export const GlobalContext = createContext();

const App = () => {
  const [state, setState] = useState(GLOBAL_STATE);

  useEffect(() => {
    getFetch().then((countries) => {
      console.log(countries);
      setState((state) => ({...state, countries}))
    })
  }, []);

  return (
    <GlobalContext.Provider value={{ state, setState }}>
      <div className="container">
        <ListCountries />
        <ListFavorites />
      </div>
    </GlobalContext.Provider>
  );
};

export default App;
