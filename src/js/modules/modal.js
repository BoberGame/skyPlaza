const modal = () => {
  const classNames = {
    active: 'show',
    bodyScroll: 'no-scroll',
    modalWindow: '.modal__window',
    modalClose: '.modal__close',
    dataModal: '[data-modal]',
  };

  const calcScroll = () => {
    const div = document.createElement('div');
    div.style.width = '50px';
    div.style.height = '50px';
    div.style.overflow = 'scroll';
    div.style.visibility = 'hidden';
    document.body.appendChild(div);
    const scrollWidth = div.offsetWidth - div.clientWidth;
    div.remove();
    return scrollWidth;
  };

  const scrollWidth = calcScroll();

  const getModal = (item) => {
    const modalId = item.dataset.modal;
    const modal = document.querySelector(modalId);
    return modal;
  };

  const showModal = (modal) => {
    modal.classList.add(classNames.active);
    document.body.classList.add(classNames.bodyScroll);
    document.body.style.marginRight = `${scrollWidth}px`;
    modal.style.paddingRight = `${scrollWidth}px`;
  };

  const closeModal = (modal) => {
    modal.classList.remove(classNames.active);
    document.body.classList.remove(classNames.bodyScroll);
    document.body.style.marginRight = '';
    modal.style.paddingRight = '';
  };

  const closeModalKeydown = (modal) => {
    const escCode = 27;
    document.addEventListener('keydown', (ev) => {
      if (ev.keyCode === escCode) closeModal(modal);
    });
  };

  const closeOutside = (modal) => {
    modal.addEventListener('click', (event) => {
      const closeCondition = event.target.closest(classNames.modalWindow);
      if (!closeCondition) closeModal(modal);
    });
  };

  document.addEventListener('click', (event) => {
    const target = event.target;
    const modalTarget = target.closest(classNames.dataModal);
    if (modalTarget) {
      const modal = getModal(modalTarget);
      const closeBtn = modal.querySelector(classNames.modalClose);
      event.preventDefault();
      showModal(modal);
      closeBtn.addEventListener('click', (event) => {
        event.preventDefault();
        closeModal(modal);
      });
      closeModalKeydown(modal);
      closeOutside(modal);
    }
  });
};

export default modal;
