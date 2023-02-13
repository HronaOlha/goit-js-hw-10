const BASE_URL = 'https://restcountries.com/v2/name/';
const listOfCodes = '?fields=name,capital,population,flags,languages';

export function fetchCountries(searchQuery) {
  return fetch(`${BASE_URL}${searchQuery}${listOfCodes}`).then(response => {
    return response.json();
  });
}
