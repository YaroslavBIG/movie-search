import { yandexTranslateKey } from './_apiKeys';

async function translate(cyr) {
  const key = yandexTranslateKey;
  const response = await fetch(`https://translate.yandex.net/api/v1.5/tr.json/translate?key=${key}&text=${cyr}&lang=ru-en`);
  const data = await response.json();
  return data;
}

export default translate;
