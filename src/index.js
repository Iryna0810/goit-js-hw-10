import './css/styles.css';
import debounce from 'lodash.debounce';
import { fetchCountries } from './fetchCountries';
import Notiflix from 'notiflix';

const DEBOUNCE_DELAY = 300;

const searchBox = document.querySelector('#search-box');
const countryList = document.querySelector('.country-list');
const countryInfo = document.querySelector('.country-info');

searchBox.addEventListener('input', debounce(handleSearch,DEBOUNCE_DELAY) );

function handleSearch(event) {
    event.preventDefault();

    if (event.target.value === '') {
        return;
    }

    const searchQuery = event.target.value.trim();
    console.log(searchQuery);
    const handleFetchCountries = fetchCountries(searchQuery);
    

    


    handleFetchCountries.then(handleCountriesListCard).catch(handleFetchError)
    
    handleFetchCountries.then(handleCountriesInfoCard).catch(handleFetchError)


    clearField();
    clearFieldList();
    console.log(fetchCountries(searchQuery));

}


function handleCountriesListCard(country) {
    if (country.length > 10) {
    return Notiflix.Notify.info('"Too many matches found. Please enter a more specific name."');
}

  
        const markup = country.map(({ name, flags }) => {
            return `
        <h2><img class='svg-flag' src="${flags.svg}" alt="" width='40' height='20'><b>   ${name.official}</b><h2>
        `;
        }).join('');
        
        countryList.insertAdjacentHTML('afterbegin', markup);
    
}
function handleCountriesInfoCard(country) {
if (country.length > 1) {
    return;
}
    
    const markupInfo = country.map(({ capital, population, languages }) => {
       return `<p><b>Capital</b>: ${capital}</p>
          <p><b>Population</b>: ${population}</p>
          <p><b>Languages</b>: ${Object.values(languages)}</p>`}).join('');
    
    countryInfo.insertAdjacentHTML('afterbegin', markupInfo);
}


function handleFetchError(error) {
    console.warn(error);
    return Notiflix.Notify.failure("Oops, there is no country with that name");
}
        
function clearField() {
    countryInfo.innerHTML = '';
}

    function clearFieldList() {
    countryList.innerHTML = '';
}


