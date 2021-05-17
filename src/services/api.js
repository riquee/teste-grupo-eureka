const getFetchCountries = async () => {
  const URL = 'https://restcountries.eu/rest/v2/all';
  return fetch(URL).then((resp) => resp.json());
};

export default getFetchCountries;
