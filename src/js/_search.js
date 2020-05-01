import swiper from './swiper/_MySwiper';
import cardGen from './_cardsGen';

function getMovieTitle(page, word, pos = 1) {
  const url = `https://www.omdbapi.com/?s=${word}&page=${page}&apikey=3c196f1e`;

  return fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      swiper.addSlide(`${pos}`, cardGen(data.Search));
      swiper.update();
      swiper.updateSlides();
    });
}

export default getMovieTitle;
