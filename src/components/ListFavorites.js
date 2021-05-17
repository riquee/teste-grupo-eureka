import React, { useContext } from 'react';
import { GlobalContext } from '../App';

const ListFavorites = () => {
  const {
    state,
    state: { countries, favorites },
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
    return favorites.map(({ name, favorite }, index) => (
      <li key={`${name} - ${index}`}>
        <p>
          {name}
          <button
            disabled={!favorite}
            type="button"
            onClick={() => onChangeCountry(name)}
          >
            Remover dos favoritos
          </button>
        </p>
      </li>
    ));
  };

  return (
    <div className="countries">
      <h2>Favorites</h2>
      <ul>{renderList()}</ul>
    </div>
  );
};

export default ListFavorites;
