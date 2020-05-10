import swiper from './swiper/_MySwiper';
import cardGen from './_cardsGen';

function setSearchText(value) {
  const searchText = document.getElementById('search_text');
  if (value) {
    searchText.innerText = `Showing results for: ${value.charAt(0).toUpperCase()}${value.slice(1).toLowerCase()}`;
    searchText.classList.add('active_title');
  } else {
    searchText.innerText = `No results for: ${value.charAt(0).toUpperCase()}${value.slice(1).toLowerCase()}`;
  }
}
function getMovieTitle(page, word, pos = 0, year = '', type = 'movie') {
  const url = `https://www.omdbapi.com/?s=${word}&y=${year}&type=${type}&page=${page}&apikey=3c196f1e`;

  return fetch(url)
    .then((res) => res.json())
    .then((data) => {
      if (Number(data.totalResults) === 0) return;
      localStorage.setItem('search', word);
      setSearchText(word);
      swiper.addSlide(`${pos}`, cardGen(data.Search));
      // swiper.update();
      // swiper.updateSlides();
    });
}

export default getMovieTitle;
