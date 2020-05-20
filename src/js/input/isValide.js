function isValide(text) {
  const regEx = /[а-яА-Яa-zA-Z0-9]+/;
  const result = regEx.test(text);
  return result;
}

export default isValide;
