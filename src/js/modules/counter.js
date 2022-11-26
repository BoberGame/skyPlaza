const counter = () => {
  const elems = {
    input: document.querySelectorAll('.counter__input'),
    maxCount: 99,
  };

  const separateItem = (action, input) => {
    if (action === 'plus' && (input.valueAsNumber !== elems.maxCount)) {
      input.valueAsNumber++;
    }
    if (action === 'minus' && (input.valueAsNumber >= 2)) {
      input.valueAsNumber--;
    }
  };

  const counterHandler = (event) => {
    event.preventDefault();
    const target = event.target;
    const action = target.dataset.counter;
    const input = target.parentElement.querySelector('.counter__input');
    separateItem(action, input);
  };

  document.addEventListener('click', (event) => {
    const target = event.target;
    if (target.dataset.counter) counterHandler(event);
  });
};

export default counter;
