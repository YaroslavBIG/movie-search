import getMovieTitle from '../_search';
import swiper from '../swiper/_MySwiper';
import activateKeyboard from '../keyboard/_activateKeyboard';
import clearInput from './_clearInput';

const buttonSearch = document.querySelector('.search-button');
const holderSearch = document.querySelector('.search-holder');
const inputSearch = document.querySelector('.search-input');
const searchText = document.getElementById('search_text');
const activeKeyboardKey = document.getElementById('activateKeyboard');
const clearInputKey = document.getElementById('clear');

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
  activeKeyboardKey.classList.toggle('icon--hidden');
  clearInputKey.classList.toggle('icon--hidden');
  getSearchValue();
}

function startSearch() {
  buttonSearch.addEventListener('click', () => enableSearch());
  activeKeyboardKey.addEventListener('click', () => activateKeyboard());
  clearInputKey.addEventListener('click', () => clearInput());
  // document.body.addEventListener('click', (event) => (event.target.classList.contains('search-button') || event.target.classList.contains('search-input') || event.target.classList.contains('keyboard__key') ? false : holderSearch.classList.remove('active')));
}

export { startSearch, getSearchValue };
