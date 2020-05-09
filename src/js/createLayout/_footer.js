import swiper from '../swiper/_MySwiper';

function footerCreate() {
  const footer = document.createElement('footer');
  const span = document.createElement('span');
  span.innerText = '&copy;Copyright 2020';

  footer.append(span);

  document.body.append(footer);

  swiper.init();
}

export default footerCreate;
