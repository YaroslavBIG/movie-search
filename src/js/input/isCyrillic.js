function isCyrillic(text) {
  return /[а-я]/i.test(text);
}

export default isCyrillic;
