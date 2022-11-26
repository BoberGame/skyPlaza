const changeMenu = () => {
  const openBtns = document.querySelectorAll('[data-menu');
  const minWidth = 768;
  for (const btn of openBtns) {
    const menuName = btn.dataset.menu;
    const menu = document.querySelectorAll(menuName);
    const wrapper = document.querySelector('.hover-menu__list');
    const menuWrapper = document.querySelector('.hover-menu__wrapper');
    if (document.body.clientWidth <= minWidth) {
      btn.addEventListener('click', (event) => {
        for (const item of menu) {
          event.preventDefault();
          item.classList.toggle('show');
        }
        wrapper.classList.toggle('hidden');
        menuWrapper.classList.toggle('show');
      });
    }
  }
};

export default changeMenu;
