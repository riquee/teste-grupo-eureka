import React from 'react';
import Button from './Button';
const Country = ({ isFavorite, country, country: { favorite, name } }) => {
  return (
    <li class="cart">
      <p>{name}</p>
      {!isFavorite && (
        <Button name={name} content="Adicionar aos Favoritos" favorite={favorite} />
      )}
      {isFavorite && (
        <Button name={name} content="Adicionar aos Favoritos" favorite={!favorite} />
      )}
    </li>
  );
};

export default Country;
