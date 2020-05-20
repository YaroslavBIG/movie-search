function ratingReq(imdbID) {
  const url = `https://www.omdbapi.com/?apikey=3c196f1e&i=${imdbID}`;
  const ratingAA = () => fetch(url)
    .then((res) => res.json())
    .then((data) => data.imdbRating);
  return ratingAA;
}

export default ratingReq;
