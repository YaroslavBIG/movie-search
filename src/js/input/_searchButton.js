import { getMovieTitle } from '../_search';
import activateKeyboard from '../keyboard/_activateKeyboard';
import clearInput from './_clearInput';
import { isCyrillic, translate } from './_translate';
import { isValide, errorValue } from './_errorValue';


const inputSearch = document.querySelector('.search-input');
const searchText = document.getElementById('search_text');
const buttonSearch = document.querySelector('.search-button');
const activeKeyboardKey = document.getElementById('activateKeyboard');
const clearInputKey = document.getElementById('clear');
const holderSearch = document.querySelector('.search-holder');
const textArea = document.querySelector('.input_board');

async function getSearchValue() {
  localStorage.setItem('filter', 'false');
  localStorage.removeItem('year');
  if (isValide(inputSearch.value)) {
    if (isCyrillic(inputSearch.value)) {
      const translData = await translate(inputSearch.value);
      const { code } = translData;
      const translWord = translData.text[0];
      localStorage.setItem('transl', translWord);
      searchText.classList.remove('error_title');
      if (code === 200) getMovieTitle('1', translWord);
      return inputSearch.value;
    }
    if (!holderSearch.classList.contains('active')) {
      searchText.classList.remove('error_title');
      getMovieTitle('1', inputSearch.value);
      return inputSearch.value;
    }
  } else if (inputSearch.value === '' || inputSearch.value === ' ') {
    return false;
  } else errorValue(inputSearch.value);
}

function enableSearch() {
  holderSearch.classList.toggle('active');
  activeKeyboardKey.classList.toggle('icon--hidden');
  clearInputKey.classList.toggle('icon--hidden');
  textArea.focus();
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
  document.addEventListener('click', (event) => {
    if (event.target === holderSearch || holderSearch.contains(event.target) || event.target.parentNode.classList.contains('keyboard__key')) {
      return true;
    }
    holderSearch.classList.remove('active');
    activeKeyboardKey.classList.add('icon--hidden');
    clearInputKey.classList.add('icon--hidden');
  });
}

export { startSearch, getSearchValue, enableSearch };
