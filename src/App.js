import React, { useState, useEffect } from 'react';
import getFetch from './services/api';
const App = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    getFetch().then((resp) => {
      const listCountries = resp.map(({ translations: { br } }) => br);
      setCountries(listCountries);
    })
  },[])

  return (
    <div>
      
    </div>
  );
};

export default App;