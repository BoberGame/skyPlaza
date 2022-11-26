function scrollTo() {
  const scrollItems = document.querySelectorAll('[data-scroll]');

  if (scrollItems.length > 0) {
    document.addEventListener('DOMContentLoaded', () => {
      scrollItems.forEach((item) => {
        const scrollBtn = item;
        const scrollId = item.dataset.scroll;
        const scrollElem = document.getElementById(scrollId);

        if (scrollElem) {
          const scrollOffsetTop = scrollElem.offsetTop;
          const windowScroll = (event) => {
            event.preventDefault();
            window.scrollTo({
              top: scrollOffsetTop - 150,
              behavior: 'smooth',
            });
          };
          scrollBtn.addEventListener('click', windowScroll);
        }
      });
    });
  }
}

export default scrollTo;
