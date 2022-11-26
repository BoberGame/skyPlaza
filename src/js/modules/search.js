const search = () => {
  const navWrapper = document.querySelector('.nav');
  const searchBtn = document.querySelector('#searchOpen');
  const searchCloseBtn = document.querySelector('#searchClose');
  const searchForm = document.querySelector('#searchForm');
  const searchInput = document.querySelector('.search__input');

  const searchOpen = () => {
    navWrapper.classList.toggle('searching');
    setTimeout(() => searchInput.focus(), 10);
  };

  const searchClose = () => navWrapper.classList.remove('searching');

  const getSearchRequest = () => {
    const request = searchInput.value;
    localStorage.setItem('searchRequest', JSON.stringify(request));
  };

  const setRequest = () => {
    const request = JSON.parse(localStorage.getItem('searchRequest'));
    const resultField = document.querySelector('#searchResult');
    if (resultField) resultField.innerText = `Result for "${request}"`;
  };

  searchBtn.addEventListener('click', searchOpen);
  searchCloseBtn.addEventListener('click', searchClose);
  searchForm.addEventListener('submit', getSearchRequest);

  setRequest();
};

export default search;
