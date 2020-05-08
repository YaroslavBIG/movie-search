import getMovieTitle from '../_search';

let count = 1;
function slidesPreload(len, real) {
  const currSearch = localStorage.getItem('search') || 'best';
  if (real >= len - 2 && len > 8) {
    count += 1;
    getMovieTitle(`${count}`, currSearch, len + 1);
  }
  if (count > 1 && real <= 2) {
    count -= 1;
    getMovieTitle(`${count}`, currSearch, 0);
  }
}

export default slidesPreload;
