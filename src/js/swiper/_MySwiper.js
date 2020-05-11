import Swiper from './_SwiperFramework';
import slidesPreload from './_slidesPreload';

const swiper = new Swiper('.swiper-container', {
  init: true,
  spaceBetween: 30,
  effect: 'coverflow',
  touchEventsTarget: 'wrapper',
  touchRatio: 1,
  followFinger: true,
  iOSEdgeSwipeDetection: true,
  grabCursor: true,
  centeredSlides: true,
  updateOnWindowResize: true,
  autoHeight: true,
  preloadImages: true,
  updateOnImagesReady: true,
  slidesPerView: 3,
  initialSlide: 0,
  slidesPerColumnFill: 'column',
  on: {
    slideChange() {
      slidesPreload(swiper.slides.length, swiper.realIndex);
    },
  },
  breakpoints: {
    // when window width is >= 320px
    200: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 3,
      spaceBetween: 30,
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
