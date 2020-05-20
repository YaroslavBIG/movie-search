import isCyrillic from '../input/isCyrillic';

function setSearchText(value) {
  const searchText = document.getElementById('search_text');
  const searchValue = document.querySelector('.search-input').value;
  if (value) {
    searchText.innerText = `Showing results for: ${value.charAt(0).toUpperCase()}${value.slice(1).toLowerCase()}`;
    searchText.classList.add('active_title');
  } else {
    if (isCyrillic(searchValue)) {
      const tarnsl = localStorage.getItem('transl');
      searchText.innerText = `No results for: ${tarnsl}`;
      return false;
    }
    searchText.innerText = `No results for: ${searchValue}`;
  }
}
export default setSearchText;
