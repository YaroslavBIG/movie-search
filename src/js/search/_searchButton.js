function startSearch() {
  const buttonSearch = document.querySelector('.search-button');
  const enableSearch = () => buttonSearch.parentElement.parentElement.classList.toggle('active');
  buttonSearch.addEventListener('click', () => enableSearch());
}

export default startSearch;
