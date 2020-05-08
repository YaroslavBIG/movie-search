import getMovieTitle from '../_search';
import swiper from '../swiper/_MySwiper';
import activateKeyboard from '../keyboard/_activateKeyboard';
import clearInput from './_clearInput';
import { isCyrillic, translate } from './_translate';

const buttonSearch = document.querySelector('.search-button');
const holderSearch = document.querySelector('.search-holder');
const inputSearch = document.querySelector('.search-input');
const searchText = document.getElementById('search_text');
const activeKeyboardKey = document.getElementById('activateKeyboard');
const clearInputKey = document.getElementById('clear');

async function getSearchValue() {
  if (isCyrillic(inputSearch.value)) {
    const translData = await translate(inputSearch.value);
    const { code } = translData;
    const translWord = translData.text[0];
    swiper.removeAllSlides();
    searchText.classList.remove('error_title');
    if (code === 200) getMovieTitle('1', translWord);
    return inputSearch.value;
  }
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


function pressEnter(event) {
  if (event.keyCode === 13 && holderSearch.classList.contains('active')) {
    enableSearch();
  }
}

function startSearch() {
  buttonSearch.addEventListener('click', () => enableSearch());
  activeKeyboardKey.addEventListener('click', () => activateKeyboard());
  clearInputKey.addEventListener('click', () => clearInput());
  document.querySelector('input').addEventListener('keydown', (event) => pressEnter(event));

  // document.body.addEventListener('click', (event) =>
  // (event.target.classList.contains('search-button')
  // || event.target.classList.contains('search-input') ||
  // event.target.classList.contains('keyboard__key') ?
  // false : holderSearch.classList.remove('active')));
}

export { startSearch, getSearchValue, enableSearch };
