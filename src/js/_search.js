import swiper from './swiper/_MySwiper';
import cardGen from './_cardsGen';

function setSearchText(value) {
  const searchText = document.getElementById('search_text');
  if (value) {
    searchText.innerText = value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
  } else {
    searchText.innerText = 'Movie Search';
  }
}
function getMovieTitle(page, word, pos = 0) {
  const url = `https://www.omdbapi.com/?s=${word}&page=${page}&apikey=3c196f1e`;

  return fetch(url)
    .then((res) => res.json())
    .then((data) => {
      localStorage.setItem('search', word);
      setSearchText(word);
      swiper.addSlide(`${pos}`, cardGen(data.Search));
      swiper.update();
      swiper.updateSlides();
    });
}

export default getMovieTitle;
