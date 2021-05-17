import React, { useContext } from 'react';
import { GlobalContext } from '../App';

const Button = ({favorite, content, name}) => {
  const {
    state,
    state: { countries },
    setState,
  } = useContext(GlobalContext);

  const onChangeCountry = () => {
    const update = countries.map((country) => {
      if (country.name === name) return { ...country, favorite: !country.favorite };
      return country;
    });
    const favorites = update.filter(({ favorite }) => favorite);
    setState({ ...state, countries: update, favorites });
  };

  return (
    <button disabled={favorite} type="button" onClick={() => onChangeCountry()}>
      {content}
    </button>
  );
};

export default Button;
