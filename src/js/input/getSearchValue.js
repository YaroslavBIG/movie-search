import getMovieTitle from '../api/getMovieTitle';
import isCyrillic from './isCyrillic';
import translate from '../api/_translate';
import errorValue from './_errorValue';
import isValide from './isValide';

async function getSearchValue() {
  const inputSearch = document.querySelector('.search-input');
  const searchText = document.getElementById('search_text');
  const holderSearch = document.querySelector('.search-holder');
  localStorage.setItem('filter', 'false');
  localStorage.removeItem('year');
  if (isValide(inputSearch.value)) {
    if (isCyrillic(inputSearch.value)) {
      const translData = await translate(inputSearch.value);
      const { code } = translData;
      const translWord = translData.text[0];
      localStorage.setItem('transl', translWord);
      searchText.classList.remove('error_title');
      if (code === 200) getMovieTitle('1', translWord);
      return inputSearch.value;
    }
    if (!holderSearch.classList.contains('active')) {
      searchText.classList.remove('error_title');
      getMovieTitle('1', inputSearch.value);
      return inputSearch.value;
    }
  } else if (inputSearch.value === '' || inputSearch.value === ' ') {
    return false;
  } else errorValue(inputSearch.value);
}

export default getSearchValue;
