const back = () => {
  const backButtons = document.querySelectorAll('[data-back]');
  for (const btn of backButtons) {
    btn.addEventListener('click', (event) => {
      history.back();
    });
  }
};

export default back;
