import Swiper from './_SwiperFramework';
import getMovieTitle from '../_search';

let count = 1;
function slidesPreload(len, real) {
  if (real >= len - 2 && len > 8) {
    count += 1;
    getMovieTitle(`${count}`, 'dream', len + 1);
    console.log(count);
  }
  if (len > 10 && real > 10) {
    console.log('real', real);
    swiper.removeSlide([0, 1, 2, 3]);
    console.log('real', real);
  }
  if (count > 1 && real <= 2) {
    count -= 1;
    getMovieTitle(`${count}`, 'dream', 0);
    if (len >= 20) {
      const arr = [];
      console.log('lenarr', len);
      arr.fill(1, 0, len - 10);
      arr.reduce((accumulator, currentValue) => accumulator + currentValue, 10);
      console.log('arr', arr);
      swiper.removeSlide(arr);
    }
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
      console.log(swiper.realIndex);
      console.log(swiper.previousIndex);
      console.log(swiper.slides.length);
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
  },
});

export default swiper;
