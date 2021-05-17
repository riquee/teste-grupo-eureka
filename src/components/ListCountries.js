import React, { useContext } from 'react';
import { GlobalContext } from '../App';
import Country from './Country';

const ListCountries = () => {
  const {
    state: { countries },
  } = useContext(GlobalContext);

  const renderList = () => {
    return countries.map((country, index) => (
      <Country key={`${country.name} - ${index}`} country={country} isFavorite={false} />
    ));
  };

  return (
    <div className="list countries">
      <h2>Countries</h2>
      <ul>{renderList()}</ul>
    </div>
  );
};

export default ListCountries;
