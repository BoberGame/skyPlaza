import * as webpFunction from './modules/webp.js';
import sliderInit from './modules/slider.js';
import burger from './modules/burger.js';
import video from './modules/video.js';
import DynamicAdapt from './modules/dynamicAdapt.js';
import modal from './modules/modal.js';
import textHide from './modules/text-hide.js';
import yandexMap from './modules/yandexMap.js';
import scrollTo from './modules/scrollTo.js';

/* Webp checking */
webpFunction.isWebp();

/* Init Swiper */
sliderInit();

/* Init Dynamic Adapt */
const da = new DynamicAdapt('max');
da.init();

/* Init burgerMenu */
burger();

/* Init video player */
video('.play__wrapper', '.play__videowrapper');

/* Init modal */
modal();

/* Init texeHide */
textHide();

/* Init YandexMap */
yandexMap();

/* Init scroll */
scrollTo('768', 2);
