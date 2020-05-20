import activateKeyboard from '../keyboard/_activateKeyboard';
import clearInput from './_clearInput';
import pressEnter from './pressEnter';
import enableSearch from './enableSearch';

const buttonSearch = document.querySelector('.search-button');
const holderSearch = document.querySelector('.search-holder');
const activeKeyboardKey = document.getElementById('activateKeyboard');
const clearInputKey = document.getElementById('clear');

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

export default startSearch;
