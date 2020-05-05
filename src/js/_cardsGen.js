function cardGen(arr) {
  const cards = document.createDocumentFragment();

  arr.forEach((obj) => {
    const { Title } = obj;
    const Poster = obj.Poster === 'N/A' ? './img/non_poster.png' : obj.Poster;
    const { Year } = obj;
    const { imdbID } = obj;
    const url = `https://www.omdbapi.com/?apikey=3c196f1e&i=${imdbID}`;
    // const getRat  = ()


    const swiperSlide = document.createElement('div');
    swiperSlide.classList.add('swiper-slide');

    const movieName = document.createElement('div');
    movieName.classList.add('card__text_name');
    const ombd = document.createElement('a');
    ombd.setAttribute('href', `https://www.imdb.com/title/${imdbID}`);
    ombd.innerText = Title;
    movieName.append(ombd);
    swiperSlide.appendChild(movieName);

    const poster = document.createElement('img');
    poster.classList.add('card__img');
    poster.setAttribute('src', `${Poster}`);
    swiperSlide.appendChild(poster);

    const year = document.createElement('div');
    year.classList.add('card__year');
    year.innerText = Year;
    swiperSlide.appendChild(year);

    const rating = document.createElement('div');
    rating.classList.add('card__rating');
    const star = document.createElement('span');
    star.classList.add('rating--star');
    rating.appendChild(star);
    function ratingGen(rat) {
      const ratingText = document.createElement('span');
      ratingText.classList.add('rating--text');
      ratingText.innerText = rat === 'N/A' ? 'no rating' : rat;
      rating.appendChild(ratingText);
      swiperSlide.appendChild(rating);
    }
    const ratingAA = () => fetch(url)
      .then((res) => res.json())
      .then((data) => data.imdbRating);
    ratingAA()
      .then((Value) => ratingGen(Value));
    const fragment = document.createDocumentFragment();
    fragment.append(swiperSlide);
    cards.append(fragment);
  });
  return cards;
}

export default cardGen;
