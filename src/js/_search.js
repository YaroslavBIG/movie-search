import swiper from './swiper/_MySwiper';
import cardGen from './_cardsGen';
import { isCyrillic } from './input/_translate';

function setSearchText(value) {
  const searchText = document.getElementById('search_text');
  const searchValue = document.querySelector('.search-input').value;
  if (value) {
    searchText.innerText = `Showing results for: ${value.charAt(0).toUpperCase()}${value.slice(1).toLowerCase()}`;
    searchText.classList.add('active_title');
  } else {
    if (isCyrillic(searchValue)) {
      const tarnsl = localStorage.getItem('transl');
      searchText.innerText = `No results for: ${tarnsl}`;
      return false;
    }
    searchText.innerText = `No results for: ${searchValue}`;
  }
}
function getMovieTitle(page, word, pos = 0, year = '', type = 'movie') {
  const isFiltred = localStorage.getItem('filter');
  let url = `https://www.omdbapi.com/?s=${word}&y=${year}&type=${type}&page=${page}&apikey=3c196f1e`;

  if (isFiltred === 'true') {
    const yearFilt = localStorage.getItem('year');
    url = `https://www.omdbapi.com/?s=${word}&y=${yearFilt}&type=${type}&page=${page}&apikey=3c196f1e`;
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
    });
}

export { getMovieTitle, setSearchText };
