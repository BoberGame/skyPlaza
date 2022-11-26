const langCodes = {
  English: 'en',
  Spanish: 'es',
  French: 'fr',
  Russian: 'ru',
  German: 'de',
  Japanese: 'jp',
  Korean: 'ko',
  Arabic: 'ar',
  Ukrainian: 'uk',
};

const getLanguageCode = (str) => {
  const newStr = str[0].toUpperCase() + str.slice(1);
  for (const code in langCodes) {
    if (newStr === code) {
      return langCodes[code];
    }
  }
};

const replaceLangCode = (item) => {
  const currentItem = document.querySelector('[data-lang]');
  const code = getLanguageCode(item.innerHTML);
  currentItem.innerHTML = code;
  document.documentElement.lang = code;
};

export default replaceLangCode;
