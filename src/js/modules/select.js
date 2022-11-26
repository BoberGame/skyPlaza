import replaceLangCode from './languageCode.js';

const select = () => {
  const selects = document.querySelectorAll('.select');
  const selectHeaders = document.querySelectorAll('.select__header');
  const selectItems = document.querySelectorAll('.select__item');

  function selectToggle() {
    this.parentElement.classList.toggle('active');
  }

  function selectChoose(item) {
    const text = item.innerText;
    const select = item.closest('.select');
    const currentText = select.querySelector('.select__current');
    currentText.innerHTML = text;
    select.classList.remove('active');
  }

  // const selectAdd = () => {
  //   for (const select of selects) {
  //     select.addEventListener('click', (event) => {
  //       const target = event.target;
  //       const selectHeader = target.closest('.select__header');
  //       const selectItems = target.closest('.select__header');
  //       console.log(selectHeader);
  //       if (target.classList.contains('select__header')) {
  //         const selectHeader = select.querySelector('.select__header');
  //         console.log(selectHeader);
  //       }
  //       // console.log(target);
  //     });
  //   };
  // };
  // selectAdd();

  for (const item of selectHeaders) {
    item.addEventListener('click', selectToggle);
  }

  document.addEventListener('click', (event) => {
    const currentItem = event.target;

    if (currentItem.classList.contains('select__item')) {
      for (const item of selectItems) item.classList.remove('active');
      selectChoose(currentItem);
      replaceLangCode(currentItem);
      currentItem.classList.add('active');
    }
  });
};

export default select;
