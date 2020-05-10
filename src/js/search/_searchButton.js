import { getMovieTitle } from '../_search';
import activateKeyboard from '../keyboard/_activateKeyboard';
import clearInput from './_clearInput';
import { isCyrillic, translate } from './_translate';
import { isValide, errorValue } from './_errorValue';


const inputSearch = document.querySelector('.search-input');
const searchText = document.getElementById('search_text');

async function getSearchValue() {
  const holderSearch = document.querySelector('.search-holder');

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
  const activeKeyboardKey = document.getElementById('activateKeyboard');
  const clearInputKey = document.getElementById('clear');
  const holderSearch = document.querySelector('.search-holder');
  const textArea = document.querySelector('.input_board');

  holderSearch.classList.toggle('active');
  activeKeyboardKey.classList.toggle('icon--hidden');
  clearInputKey.classList.toggle('icon--hidden');
  textArea.focus();
  getSearchValue();
}


function pressEnter(event) {
  const holderSearch = document.querySelector('.search-holder');

  if (event.keyCode === 13 && holderSearch.classList.contains('active')) {
    enableSearch();
  }
}

function startSearch() {
  const buttonSearch = document.querySelector('.search-button');
  const activeKeyboardKey = document.getElementById('activateKeyboard');
  const clearInputKey = document.getElementById('clear');
  // const holderSearch = document.querySelector('.search-holder');
  // const keyboard = document.querySelector('.keyboard');
  // const keyboardKeys = document.querySelector('.keyboard__keys');
  // const keyboardKey = document.querySelector('.keyboard__key');
  // const circle = document.querySelector('.circle');

  buttonSearch.addEventListener('click', () => enableSearch());
  activeKeyboardKey.addEventListener('click', () => activateKeyboard());
  clearInputKey.addEventListener('click', () => clearInput());
  document.querySelector('input').addEventListener('keydown', (event) => pressEnter(event));

  // const searchComponents = [
  //   holderSearch,
  //   buttonSearch,
  //   activeKeyboardKey,
  //   clearInputKey,
  //   inputSearch,
  //   keyboard,
  //   keyboardKeys,
  //   keyboardKey,
  //   circle,
  // ];

  // document.addEventListener('click', (event) => {
  //   console.log(event.target.parentNode);
  //   if (searchComponents.indexOf(event.target) === -1) enableSearch('close');
  //   return false;
  // });

  // document.body.addEventListener('click', (event) =>
  // (event.target.classList.contains('search-button')
  // || event.target.classList.contains('search-input') ||
  // event.target.classList.contains('keyboard__key') ?
  // false : holderSearch.classList.remove('active')));
}

export { startSearch, getSearchValue, enableSearch };
