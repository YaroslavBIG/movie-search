import Swiper from './_SwiperFramework';
import slidesPreload from './_slidesPreload';

const swiper = new Swiper('.swiper-container', {
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
