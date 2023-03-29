import './css/styles.css';
import debounce from 'lodash.debounce';
import { fetchCountries } from './fetchCountries';
import Notiflix from 'notiflix';

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

    const searchQuery = event.target.value.trim();
    console.log(searchQuery);

    fetchCountries(searchQuery).then(handleCountriesCard)
        .catch(handleFetchError);
    
    console.log(fetchCountries(searchQuery));

}


function handleCountriesCard(country) {
    const markup = (({ name, capital, population, flags, languages }) => {
        return `<li>
            <h2><b>Name</b>: ${{ this.name.oficial }}</h2>
            <p><b>Capital</b>: ${{capital}}</p>
            <p><b>Population</b>: ${{ population }}</p>
            <p><b>Flag</b>: ${{flags.svg }}</p>
            <p><b>Languages</b>: ${languages}</p>
          </li>`
      ;
    });
    // const country = { name, capital, population, flags, languages };
    countryInfo.innerHTML = markup(country);
    console.log(markup(country))
}


function handleFetchError(error) {
    console.warn(error);
    return Notiflix.Notify.failure("Oops, there is no country with that name");
        }


