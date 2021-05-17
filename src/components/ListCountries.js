import React, { useContext, useEffect } from 'react';
import getFetch from '../services/api';
import { GlobalContext } from '../App';
const ListCountries = () => {
  const { state, setState } = useContext(GlobalContext);

  useEffect(() => {
    getFetch().then((resp) => {
      const countries = resp.map(({ translations: { br } }) => br);
      setState({...state, countries });
    });
  }, [state, setState]);
  return <div>Oi</div>;
};

export default ListCountries;
