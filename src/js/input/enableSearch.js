import getSearchValue from './getSearchValue';

function enableSearch() {
  const holderSearch = document.querySelector('.search-holder');
  const activeKeyboardKey = document.getElementById('activateKeyboard');
  const clearInputKey = document.getElementById('clear');
  const textArea = document.querySelector('.input_board');

  holderSearch.classList.toggle('active');
  activeKeyboardKey.classList.toggle('icon--hidden');
  clearInputKey.classList.toggle('icon--hidden');
  textArea.focus();
  getSearchValue();
}

export default enableSearch;
