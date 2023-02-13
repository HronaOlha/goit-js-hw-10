import './css/styles.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { fetchCountries } from './fetch_countries';
const debounce = require('lodash.debounce');

const input = document.getElementById('search-box');
const dataContainer = document.querySelector('.country-info');
const countryList = document.querySelector('.country-list');

const DEBOUNCE_DELAY = 300;

input.addEventListener('input', debounce(searchResult, DEBOUNCE_DELAY));

function searchResult(e) {
  const searchQuery = e.target.value.trim();

  if (searchQuery === '') {
    clearPage();
    return;
  }

  fetchCountries(searchQuery)
    .then(query => {
      createCountryList(query);
    })
    .catch(onFetchError);
}

function createCountryList(query) {
  clearPage();

  if (query.length > 10) {
    Notify.info('Too many matches found. Please enter a more specific name.');
    return;
  }
  if (query.length === 1) {
    return createDataAboutCountry(query);
  }

  const countryItem = query
    .map(
      ({ name, flags }) =>
        `
      <li class="country_list">
  <img  src="${flags.png}" alt="flag of ${name}" width=30px>
  <p class="country_list_name">${name}</p>
</li>`
    )
    .join('');
  countryList.insertAdjacentHTML('beforeend', countryItem);
}

function createDataAboutCountry(query) {
  clearPage();

  const { capital, name, population, languages, flags } = query[0];
  const nameLanguages = languages.map(language => language.name);

  const infoAboutCountry = `<img src="${flags.png}" alt="" width=150px>
      <p class="name">Official name: ${name}</p>
      <p class="capital">Capital: ${capital}</p>
      <p class="population">Population: ${population}</p>
      <p class="languages">Languages: ${nameLanguages.join(', ')}</p>`;
  dataContainer.insertAdjacentHTML('beforeend', infoAboutCountry);
}

function clearPage() {
  countryList.innerHTML = '';
  dataContainer.innerHTML = '';
}

function onFetchError() {
  Notify.failure('Oops, there is no country with that name');
}
