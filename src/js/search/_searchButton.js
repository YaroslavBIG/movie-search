import getMovieTitle from '../_search';
import swiper from '../swiper/_MySwiper';

const buttonSearch = document.querySelector('.search-button');
const holderSearch = document.querySelector('.search-holder');
const inputSearch = document.querySelector('.search-input');
const searchText = document.getElementById('search_text');

function getSearchValue() {
  if (inputSearch !== '') {
    searchText.innerText = 'Search error';
  }
  if (!holderSearch.classList.contains('active')) {
    console.log('22222222222222222222222222222');
    swiper.removeAllSlides();
    getMovieTitle('1', inputSearch.value);
    return inputSearch.value;
  }
}
function enableSearch() {
  holderSearch.classList.toggle('active');
  getSearchValue();
}

function startSearch() {
  buttonSearch.addEventListener('click', () => enableSearch());
}

export { startSearch, getSearchValue };
