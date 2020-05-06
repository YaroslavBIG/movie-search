import swiper from './js/swiper/_MySwiper';
import { startSearch } from './js/search/_searchButton';
import getMovieTitle from './js/_search';
import addKeybord from './js/keyboard/_addKeybord';
import createKeys from './js/keyboard/_mainKeyboard';

startSearch();

swiper.removeAllSlides();

getMovieTitle('1', 'best');

createKeys();
