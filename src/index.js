// import headerCreate from './js/createLayout/_header';
// import mainCreate from './js/createLayout/_main';
// import footerCreate from './js/createLayout/_footer';
import { startSearch } from './js/search/_searchButton';
import swiper from './js/swiper/_MySwiper';
import getMovieTitle from './js/_search';
import createKeys from './js/keyboard/_mainKeyboard';

// headerCreate();

// mainCreate();

// footerCreate();

startSearch();

swiper.removeAllSlides();

getMovieTitle('1', 'best');

createKeys();
