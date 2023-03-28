import './css/styles.css';
import debounce from 'lodash.debounce';
import * as fetchCountries from './fetchCountries';

const DEBOUNCE_DELAY = 300;

const searchBox = document.querySelector('#search-box');
const countryList = document.querySelector('.country-list');
const countryInfo = document.querySelector('.country-info');

searchBox.addEventListener('input', handleSearch);

 



function handleSearch(event) {
    event.preventDefault();

    if (event.currentTarget.value === '') {
        return;
    }

    const searchQuery = event.currentTarget.value.trim();
    console.log(searchQuery);

    fetchCountries(searchQuery)
        .then(handleCountriesCard)
        .catch(handleFetchError);

}

function fetchCountries(countryName) {
  return fetch(
    `https://restcountries.com/v3.1/name/${countryName}?fields=name,flags,capital,population,languages`).then((response) => {
            if (!response.ok) {
                throw new Error(response.status);
            }
        return response.json();
        }) 
}

function handleCountriesCard(countries) {
    const markup = countries.map(({ name, capital, population, flags, languages }) => {
        return `<li>
            <h2><b>Name</b>: ${name}</h2>
            <p><b>Capital</b>: ${capital}</p>
            <p><b>Population</b>: ${population}</p>
            <p><b>Flag</b>: ${flags}</p>
            <p><b>Languages</b>: ${languages}</p>
          </li>`
      ;
    })
        .join("");
    countryInfo.innerHTML = markup;
}


function handleFetchError(error) {
    console.warn(error);
    return Notiflix.Notify.failure("error");
        }


