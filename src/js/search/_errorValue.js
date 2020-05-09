function isValide(text) {
  const regEx = /[а-яА-Яa-zA-Z0-9]+/;
  const result = regEx.test(text);
  return result;
}

function errorValue(text, errorText = 'No results for:') {
  function getResStatus(page, word) {
    const url = `https://www.omdbapi.com/?s=${word}&page=${page}&apikey=3c196f1e`;
    return fetch(url)
      .then((res) => {
        const resStatus = parseInt(res.status, 10);
        const { statusText } = res;
        if (resStatus >= 400 && resStatus <= 526) errorValue(`${resStatus} ${statusText}`, 'Something went wrong error:');
        else return true;
      });
  }
  if (getResStatus(1, text)) {
    const searchText = document.getElementById('search_text');
    searchText.innerText = `${errorText} ${text}`;
    searchText.classList.add('error_title');
  }
}

export { isValide, errorValue };
