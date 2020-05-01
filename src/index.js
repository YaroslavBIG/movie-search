import swiper from './js/swiper/_MySwiper';
import startSearch from './js/search/_searchButton';
import cardGen from './js/_cardsGen';
import getMovieTitle from './js/_search';

startSearch();

swiper.removeAllSlides();

getMovieTitle('1', 'dream');
