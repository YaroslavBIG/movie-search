import getMovieTitle from '../_search';
import swiper from '../swiper/_MySwiper';

const buttonSearch = document.querySelector('.search-button');
const holderSearch = document.querySelector('.search-holder');
const inputSearch = document.querySelector('.search-input');
const searchText = document.getElementById('search_text');

function getSearchValue() {
  if (inputSearch.value === '') {
    searchText.classList.add('error_title');
    // getMovieTitle('1', localStorage.getItem('search'));
  }
  if (!holderSearch.classList.contains('active')) {
    swiper.removeAllSlides();
    searchText.classList.remove('error_title');
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
  document.body.addEventListener('click', (event) => (event.target.classList.contains('search-button') || event.target.classList.contains('search-input') || event.target.classList.contains('keyboard__key') ? false : holderSearch.classList.remove('active')));
}

export { startSearch, getSearchValue };
