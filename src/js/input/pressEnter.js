import enableSearch from './enableSearch';

function pressEnter(event) {
  const holderSearch = document.querySelector('.search-holder');
  if (event.keyCode === 13 && holderSearch.classList.contains('active')) {
    enableSearch();
  }
}

export default pressEnter;
