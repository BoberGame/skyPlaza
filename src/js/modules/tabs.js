const tabs = () => {
  const tabs = {
    buttons: document.querySelectorAll('.tabs__btn'),
    items: document.querySelectorAll('.tabs__content'),
  };

  const replaceTabContent = (id) => {
    const currentTab = document.querySelector(id);
    for (const item of tabs.items) item.classList.remove('active');
    currentTab.classList.add('active');
  };

  const tabsClick = (event) => {
    const btn = event.target;
    const tabId = btn.dataset.tab;
    if (!btn.classList.contains('active')) {
      for (const tabBtn of tabs.buttons) tabBtn.classList.remove('active');
      btn.classList.add('active');
    }
    replaceTabContent(tabId);
    event.preventDefault();
  };
  if (tabs.buttons) {
    for (const btn of tabs.buttons) {
      btn.addEventListener('click', tabsClick);
    }
  }
};

export default tabs;
