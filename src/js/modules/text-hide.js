function textHide() {
  const BTN_CLASSNAME = 'reviews__more';
  const $btn = `
  <button class="${BTN_CLASSNAME}" type="button">Открыть полностью</button>`;
  const textItems = document.querySelectorAll('.reviews__text');

  textItems.forEach((elem) => {
    const maxHeight = 105;
    const height = elem.offsetHeight;
    if (height >= maxHeight) {
      elem.classList.add('hide');
      elem.insertAdjacentHTML('afterend', $btn);
    }
  });

  const changeBtnText = (element) => {
    let btnText;
    const btn = element;
    const item = btn.previousElementSibling;
    if (item.classList.contains('hide')) btnText = 'Скрыть';
    else btnText = 'Открыть полностью';
    btn.innerHTML = btnText;
    return item;
  };

  document.addEventListener('click', (event) => {
    if (event.target.classList.contains(BTN_CLASSNAME)) {
      const item = changeBtnText(event.target);
      item.classList.toggle('hide');
    }
  });
}

export default textHide;
