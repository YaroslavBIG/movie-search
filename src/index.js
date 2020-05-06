import swiper from './js/swiper/_MySwiper';
import { startSearch } from './js/search/_searchButton';
import getMovieTitle from './js/_search';

startSearch();

swiper.removeAllSlides();

getMovieTitle('1', 'best');
