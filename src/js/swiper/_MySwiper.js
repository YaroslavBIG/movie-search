import Swiper from './_SwiperFramework';
import getMovieTitle from '../_search';

let count = 1;
function slidesPreload(len, real) {
  const currSearch = localStorage.getItem('search') || 'dream';

  if (real >= len - 2 && len > 8) {
    count += 1;
    getMovieTitle(`${count}`, currSearch, len + 1);
  }

  if (count > 1 && real <= 2) {
    count -= 1;
    getMovieTitle(`${count}`, currSearch, 0);
  }
}

const swiper = new Swiper('.swiper-container', {
  // slidesPerView: 3,
  spaceBetween: 30,
  effect: 'coverflow',
  grabCursor: false,
  centeredSlides: true,
  updateOnWindowResize: true,
  autoHeight: true,
  preloadImages: true,
  updateOnImagesReady: true,
  slidesPerView: 3,
  slidesPerColumnFill: 'column',
  on: {
    init() {

    },
    click() {
     
    },
    slideChange() {
      slidesPreload(swiper.slides.length, swiper.realIndex);
    },
  },
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
    dynamicMainBullets: 10,
  },
});

export default swiper;
