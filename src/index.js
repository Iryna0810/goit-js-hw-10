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

    const searchQuery = event.target.value.trim();

    clearField();
    clearFieldList();
    
    if (searchQuery === '') {
        return;
    }

    fetchCountries(searchQuery).then(handleCountriesListCard).catch(handleFetchError)
    
}


function handleCountriesListCard(country) {
    if (country.length > 10) {
    return Notiflix.Notify.info('"Too many matches found. Please enter a more specific name."');
    }

    if (country.length >= 2 && country.length <= 10) {
       return renderCountryListCard(country);
    }
    
    if (country.length === 1) {
        renderCountryInfoCard(country);
        return;
    }
   }

function renderCountryListCard(country) {
    const markup = country.map(({ name, flags }) => {
            return `
        <h3><img class='svg-flag' src="${flags.svg}" alt="" width='30' height='15'><b>   ${name.official}</b><h3>
        `;
        }).join('');
        
        countryList.insertAdjacentHTML('afterbegin', markup);
}
    
function renderCountryInfoCard(country) {
 const markupInfo = country.map(({ name, flags, capital, population, languages }) => {
     return `
     <h2><img class='svg-flag' src="${flags.svg}" alt="" width='40' height='20'><b>   ${name.official}</b><h2>  
     <p><b>Capital</b>: ${capital}</p>
     <p><b>Population</b>: ${population}</p>
     <p><b>Languages</b>: ${Object.values(languages)}</p>`}).join('');
    
    countryInfo.insertAdjacentHTML('afterbegin', markupInfo);
} 

function handleFetchError() {
    return Notiflix.Notify.failure("Oops, there is no country with that name");
}
        
function clearField() {
    countryInfo.innerHTML = '';
}

    function clearFieldList() {
    countryList.innerHTML = '';
}


