import startSearch from './js/input/_searchButton';
import swiper from './js/swiper/_MySwiper';
import getMovieTitle from './js/api/getMovieTitle';
import createKeys from './js/keyboard/_mainKeyboard';
import startFilterEvents from './js/filter/_searchFilter';

localStorage.setItem('filter', 'false');
localStorage.removeItem('year');

startSearch();

swiper.removeAllSlides();

getMovieTitle('1', 'best');

createKeys();

startFilterEvents();
