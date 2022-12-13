import Swiper, { Navigation, Keyboard, A11y, EffectFade, Thumbs, Autoplay } from 'swiper';

const sliderInit = () => {
  const swiperIntro = new Swiper('.swiper-intro', {
    modules: [Keyboard, A11y, EffectFade, Autoplay],
    observer: true,
    observerParents: true,
    loop: true,
    spaceBetween: 20,
    autoplay: {
      delay: 5000,
    },
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
    a11y: {
      prevSlideMessage: 'Previous slide',
      nextSlideMessage: 'Next slide',
    },
    slidesPerView: 1,
  });

  const swiperRooms = new Swiper('.swiper-rooms', {
    modules: [Keyboard, A11y],
    observer: true,
    observerParents: true,
    spaceBetween: 20,
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
    a11y: {
      prevSlideMessage: 'Previous slide',
      nextSlideMessage: 'Next slide',
    },

    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      480: {
        slidesPerView: 1.6,
      },
      640: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 20
      },
      1140: {
        slidesPerView: 4
      }
    }
  });

  const swiperGallery1 = new Swiper('.swiper-gallery_main', {
    modules: [Keyboard, A11y, Thumbs],
    observer: true,
    observerParents: true,
    spaceBetween: 15,
    slidesPerView: 5.4,
    freeMode: true,
    watchSlidesProgress: true,
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
    a11y: {
      prevSlideMessage: 'Previous slide',
      nextSlideMessage: 'Next slide',
    },
    breakpoints: {
      320: {
        spaceBetween: 7
      },
      576: {
        spaceBetween: 10
      },
      768: {
        spaceBetween: 15
      },
    }

  });

  const swiperGallery2 = new Swiper('.swiper-gallery_thumbs', {
    modules: [Keyboard, A11y, Navigation, Thumbs],
    observer: true,
    observerParents: true,
    spaceBetween: 15,
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
    a11y: {
      prevSlideMessage: 'Previous slide',
      nextSlideMessage: 'Next slide',
    },
    thumbs: {
      swiper: swiperGallery1,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
};

export default sliderInit;
