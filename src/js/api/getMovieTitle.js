import swiper from '../swiper/_MySwiper';
import cardGen from '../createLayout/_cardsGen';
import setSearchText from '../search/_search';
import errorValue from '../input/_errorValue';
import { imdbApiKey } from './_apiKeys';

function getMovieTitle(page, word, pos = 0, year = '', type = 'movie') {
  const isFiltred = localStorage.getItem('filter');
  const key = imdbApiKey;
  let url = `https://www.omdbapi.com/?s=${word}&y=${year}&type=${type}&page=${page}&apikey=${key}`;
  if (isFiltred === 'true') {
    const yearStore = localStorage.getItem('year');
    url = `https://www.omdbapi.com/?s=${word}&y=${yearStore}&type=${type}&page=${page}&apikey=${key}`;
  }
  return fetch(url)
    .then((res) => (res.ok ? res.json() : Promise.reject(res)))
    .then((data) => {
      const prevSearch = localStorage.getItem('search');
      const currSearch = word;
      if (typeof data.Search === 'undefined') return setSearchText(false);
      if (prevSearch !== currSearch) {
        localStorage.setItem('search', word);
        swiper.removeAllSlides();
      }
      setSearchText(word);
      swiper.addSlide(`${pos}`, cardGen(data.Search));
    })
    .catch((error) => errorValue('', error));
}

export default getMovieTitle;
