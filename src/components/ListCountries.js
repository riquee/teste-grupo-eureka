import React, { useContext } from 'react';
import { GlobalContext } from '../App';
const ListCountries = () => {
  const {
    state,
    state: { countries },
    setState,
  } = useContext(GlobalContext);

  const onChangeCountry = (name) => {
    const update = countries.map((country) => {
      if (country.name === name) return { ...country, favorite: !country.favorite };
      return country;
    });
    const favorites = update.filter(({ favorite }) => favorite);
    setState({ ...state, countries: update, favorites });
  };

  const renderList = () => {
    return countries.map(({ name, favorite }, index) => (
      <li key={`${name} - ${index}`}>
        <p>
          {name}
          <button disabled={favorite} type="button" onClick={() => onChangeCountry(name)}>
            Adicionar favoritos
          </button>
        </p>
      </li>
    ));
  };

  return (
    <div className="countries">
      <h2>Countries</h2>
      <ul>{renderList()}</ul>
    </div>
  );
};

export default ListCountries;
