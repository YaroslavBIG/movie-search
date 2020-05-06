import swiper from './js/swiper/_MySwiper';
import { startSearch } from './js/search/_searchButton';
import getMovieTitle from './js/_search';
import addKeybord from './js/keyboard/_mainKeyboard';


startSearch();

addKeybord();
swiper.removeAllSlides();

getMovieTitle('1', 'dream');
