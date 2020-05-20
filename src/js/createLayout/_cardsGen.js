import ratingReq from '../api/ratingReq';

function cardGen(arr) {
  const cards = document.createDocumentFragment();

  if (arr) {
    arr.forEach((obj) => {
      const none = 'N/A';
      const { Title } = obj;
      const posterImg = obj.Poster === none ? './img/non_poster.png' : obj.Poster;
      const { Year } = obj;
      const { imdbID } = obj;
      const videoGalery = `https://www.imdb.com/title/${imdbID}/videogallery/`;

      const swiperSlide = document.createElement('div');
      swiperSlide.classList.add('swiper-slide');

      const movieName = document.createElement('div');
      movieName.classList.add('card__text_name');
      const ombd = document.createElement('a');
      ombd.setAttribute('href', videoGalery);
      ombd.innerText = Title;
      movieName.append(ombd);
      swiperSlide.appendChild(movieName);

      const poster = document.createElement('img');
      poster.classList.add('card__img');
      poster.setAttribute('src', './img/spiner.svg');
      poster.onerror = function errorImg() { this.src = './img/non_poster.png'; };
      poster.onload = function setImg() { this.src = `${posterImg}`; };
      swiperSlide.appendChild(poster);

      const year = document.createElement('div');
      year.classList.add('card__year');
      year.innerText = Year;
      swiperSlide.appendChild(year);

      const rating = document.createElement('div');
      rating.classList.add('card__rating');
      const star = document.createElement('i');
      star.classList.add('rating--star', 'material-icons', 'md-36');
      star.innerText = 'star';
      rating.appendChild(star);

      function ratingGen(rat) {
        const ratingNone = 'no rating';
        const ratingText = document.createElement('span');
        ratingText.classList.add('rating--text');
        ratingText.innerText = rat === none ? ratingNone : rat;
        rating.appendChild(ratingText);
        swiperSlide.appendChild(rating);
      }
      const ratingAA = ratingReq(imdbID);
      ratingAA()
        .then((Value) => ratingGen(Value));
      const fragment = document.createDocumentFragment();
      fragment.append(swiperSlide);
      cards.append(fragment);
    });
  }

  return cards;
}

export default cardGen;
