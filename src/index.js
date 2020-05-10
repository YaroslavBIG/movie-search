import { startSearch } from './js/input/_searchButton';
import swiper from './js/swiper/_MySwiper';
import { getMovieTitle } from './js/_search';
import createKeys from './js/keyboard/_mainKeyboard';

startSearch();

swiper.removeAllSlides();

getMovieTitle('1', 'best');

createKeys();
