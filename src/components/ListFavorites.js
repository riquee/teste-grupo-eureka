import React, { useContext } from 'react';
import { GlobalContext } from '../App';
import Country from './Country';

const ListFavorites = () => {
  const {
    state: { favorites },
  } = useContext(GlobalContext);

  const renderList = () => {
    return favorites.map((country, index) => (
      <Country key={`${country.name} - ${index}`} country={country} isFavorite={true} />
    ));
  };

  return (
    <div className="list favorites">
      <h2>Favorites</h2>
      <ul>{renderList()}</ul>
    </div>
  );
};

export default ListFavorites;
