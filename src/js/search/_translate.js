function isCyrillic(text) {
  return /[а-я]/i.test(text);
}


async function translate(cyr) {
  const key = 'trnsl.1.1.20200428T150322Z.a6a1bee98403ab63.106cdb7826f9e664bc0f48ef68b076b9f5e52977';
  const response = await fetch(`https://translate.yandex.net/api/v1.5/tr.json/translate?key=${key}&text=${cyr}&lang=ru-en`);
  const data = await response.json();
  return data;
}

export { isCyrillic, translate };
