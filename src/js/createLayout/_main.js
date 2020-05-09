function mainCreate() {
  const fragment = document.createDocumentFragment();

  const main = document.createElement('main');

  (function searchCreate() {
    const searchHolder = document.createElement('div');
    searchHolder.classList.add('search-holder');

    const circle = document.createElement('div');
    circle.classList.add('circle');

    searchHolder.append(circle);

    const form = document.createElement('div');
    form.classList.add('form');
    form.setAttribute('autocomplete', 'off');

    searchHolder.append(form);

    const searchButton = document.createElement('div');
    searchButton.classList.add('search-button');
    form.append(searchButton);

    const keyboardIco = document.createElement('i');
    keyboardIco.id = 'activateKeyboard';
    keyboardIco.innerText = 'keyboard';
    keyboardIco.classList.add('material-icons', 'blue', 'keyboard_icon', 'keyboard_icon--position', 'keyboard_icon--inactive', 'md-36', 'icon--hidden');
    form.append(keyboardIco);

    const clearIco = document.createElement('i');
    clearIco.id = 'clear';
    clearIco.innerText = 'clear';
    clearIco.classList.add('material-icons', 'blue', 'clear_icon', 'clear_icon--position', 'clear_icon--inactive', 'md-36', 'icon--hidden');
    form.append(clearIco);

    const inputSearch = document.createElement('input');
    inputSearch.type = 'text';
    inputSearch.classList.add('search-input', 'input_board');
    inputSearch.placeholder = 'Type here to search ...';
    inputSearch.autocomplete = 'disabled';
    inputSearch.autofocus = true;
    form.append(inputSearch);

    searchHolder.append(form);

    main.append(searchHolder);

    const searchText = document.createElement('div');
    searchText.id = 'search_text';
    searchText.classList.add('search_text');

    main.append(searchText);
  }());

  (function swiperCreate() {
    const swiperContainer = document.createElement('div');
    swiperContainer.classList.add('swiper-container');

    const swiperWrapper = document.createElement('div');
    swiperWrapper.classList.add('swiper-wrapper');

    swiperContainer.append(swiperWrapper);

    const swiperSlide = document.createElement('div');
    swiperSlide.classList.add('swiper-slide');
    swiperSlide.innerText = 'Slide 1';

    const swiperSlideNext = document.createElement('div');
    swiperSlideNext.classList.add('swiper-slide');
    swiperSlideNext.innerText = 'Slide 2';

    swiperWrapper.append(swiperSlideNext);

    swiperWrapper.append(swiperSlide);

    const swiperPagination = document.createElement('div');
    swiperPagination.classList.add('swiper-pagination');

    swiperWrapper.append(swiperPagination);

    const swiperNavNext = document.createElement('div');
    swiperNavNext.classList.add('swiper-button-next');

    const swiperNavPrev = document.createElement('div');
    swiperNavPrev.classList.add('swiper-button-prev');

    swiperWrapper.append(swiperNavNext);
    swiperWrapper.append(swiperNavPrev);


    main.append(swiperContainer);
  }());

  fragment.append(main);

  document.body.append(fragment);
}

export default mainCreate;
