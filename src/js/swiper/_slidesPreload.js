import getMovieTitle from '../_search';

let count = 1;
function slidesPreload(len, real) {
  const currSearch = localStorage.getItem('search') || 'best';
  if (real >= len - 5 && len > 5) {
    count += 1;
    getMovieTitle(`${count}`, currSearch, len + 1);
  }
  if (count > 1 && real <= 4) {
    count -= 1;
    getMovieTitle(`${count}`, currSearch, 0);
  }
  localStorage.setItem('strCount', count);
}

export default slidesPreload;
