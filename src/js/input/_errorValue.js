function errorValue(text = 'Something went wrong: ', errorText = 'Invalid request') {
  const searchText = document.getElementById('search_text');
  searchText.innerText = `${text} ${errorText}`;
  searchText.classList.add('error_title');
}

export default errorValue;
