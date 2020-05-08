import getMovieTitle from '../_search';

function isValide(text) {
  const regEx = /[а-яА-Яa-zA-Z0-9]+/;
  const result = regEx.test(text);
  console.log(result);
  return result;
}

function errorValue(text) {
  const searchText = document.getElementById('search_text');
  searchText.innerText = `No results for: ${text}`;
  const movieName = localStorage.getItem('search') || 'best';
  getMovieTitle('1', movieName);
}

export { isValide, errorValue };
