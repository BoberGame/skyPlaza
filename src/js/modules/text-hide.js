function textHide() {
  const $btn = `
  <button class="reviews__more" type="button">Открыть полностью</button>`;
  const textItems = document.querySelectorAll('.reviews__text');
  const maxHeight = 105;
  textItems.forEach((elem) => {
    const height = elem.offsetHeight;
    if (height >= maxHeight) {
      elem.classList.add('hide');
      elem.insertAdjacentHTML('afterend', $btn);
    }
  });
  document.addEventListener('click', (event) => {
    if (event.target.classList.contains('reviews__more')) {
      const btn = event.target;
      const item = btn.previousElementSibling;
      if (item.classList.contains('hide')) {
        btn.innerHTML = 'Скрыть';
        item.classList.remove('hide');
      } else {
        item.classList.add('hide');
        btn.innerHTML = 'Открыть полностью';
      }
    }
  });
}

export default textHide;
