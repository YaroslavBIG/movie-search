import { getMovieTitle } from '../_search';
import swiper from '../swiper/_MySwiper';

const checkBox = document.getElementById('year');
const inputYear = document.getElementById('filter');
const button = document.querySelector('button');
const yearLabel = document.querySelector('.year_label');

function filterResultByYear(year) {
  const currentSearch = localStorage.getItem('search');
  localStorage.setItem('filter', 'true');
  localStorage.setItem('year', year);
  getMovieTitle(1, currentSearch, 0, year);
  swiper.removeAllSlides();
}

function buttonClick() {
  const year = Number(inputYear.value);
  if (year <= 1930 || year >= 2020) { return false; }
  filterResultByYear(year);
}

function check(event) {
  if (event.target.checked) {
    inputYear.classList.remove('filter--hidden');
    yearLabel.classList.remove('filter--hidden');
  } else {
    inputYear.classList.add('filter--hidden');
    yearLabel.classList.add('filter--hidden');
    localStorage.setItem('filter', 'false');
    localStorage.removeItem('year');
  }
}

function startFilterEvents() {
  button.addEventListener('click', () => buttonClick());
  checkBox.addEventListener('change', (event) => check(event));
}

export default startFilterEvents;
