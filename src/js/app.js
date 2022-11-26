import * as webpFunction from './modules/webp.js';
import sliderInit from './modules/slider.js';
// import startScore from './modules/starRating.js';
// import changeMenu from './modules/menu.js';
// import select from './modules/select.js';
import burger from './modules/burger.js';
// import tabs from './modules/tabs.js';
// import counter from './modules/counter.js';
import video from './modules/video.js';
// import replaceCode from './modules/languageCode.js';
import DynamicAdapt from './modules/dynamicAdapt.js';
// import search from './modules/search.js';
import modal from './modules/modal.js';
import textHide from './modules/text-hide.js';
import yandexMap from './modules/yandexMap.js';
import scrollTo from './modules/scrollTo.js';
// import form from './modules/form.js';
// import back from './modules/backApi.js';

/* Webp checking */
webpFunction.isWebp();

/* Init Swiper Js */
sliderInit();

/* Init Dynamic Adapt */
const da = new DynamicAdapt('max');
da.init();

/* Init rating stars */
// startScore(5, '.reviews__rating');

// changeMenu();

/* Init select func */
// select();

/* Init burger func */
burger();

/* Init tabs func */
// tabs();

/* Init counter */
// counter();

/* Init video func */
video('.play__wrapper', '.play__videowrapper');

/* Init Search input func*/
// search();

/* Init modal func */
modal();
document.addEventListener('DOMContentLoaded', textHide);
yandexMap();
scrollTo();
/* Back API */
// back();

// form();
