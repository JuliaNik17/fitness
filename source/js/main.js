// import {iosVhFix} from './utils/ios-vh-fix';
// import {initModals} from './modules/modals/init-modals';
import Glide from '@glidejs/glide';

// ---------------------------------
window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------
  const tabsControlsMonth = document.querySelector('.tabs__controls--month');
  const tabsControlsHalfYear = document.querySelector('.tabs__controls--half-year');
  const tabsControlsYear = document.querySelector('.tabs__controls--year');
  const tabMonth = document.getElementById('month');
  const tabHalfYear = document.getElementById('half-year');
  const tabYear = document.getElementById('year');
  const gymButton = document.querySelector('.gym__video-button');
  const iframe = document.querySelector('.gym__video-iframe');
  const gymVideoPoster = document.querySelector('.gym__video-poster');
  const phoneNumber = document.querySelector('.phone-number');
  const PHONE_NUMBER_LENGTH = 11;

  gymButton.addEventListener('click', () => {
    iframe.style.opacity = '1';
    gymVideoPoster.style.display = 'none';
    iframe.src += '?autoplay=1';
  });


  tabsControlsMonth.addEventListener('click', () => {
    tabMonth.classList.add('tabs__list--active');
    tabsControlsMonth.classList.add('tabs__controls--active');

    tabsControlsHalfYear.classList.remove('tabs__controls--active');
    tabHalfYear.classList.remove('tabs__list--active');

    tabYear.classList.remove('tabs__list--active');
    tabsControlsYear.classList.remove('tabs__controls--active');
  });

  tabsControlsHalfYear.addEventListener('click', () => {
    tabsControlsHalfYear.classList.add('tabs__controls--active');
    tabHalfYear.classList.add('tabs__list--active');

    tabsControlsMonth.classList.remove('tabs__controls--active');
    tabMonth.classList.remove('tabs__list--active');

    tabsControlsYear.classList.remove('tabs__controls--active');
    tabYear.classList.remove('tabs__list--active');
  });

  tabsControlsYear.addEventListener('click', () => {
    tabsControlsYear.classList.add('tabs__controls--active');
    tabYear.classList.add('tabs__list--active');

    tabsControlsHalfYear.classList.remove('tabs__controls--active');
    tabHalfYear.classList.remove('tabs__list--active');

    tabsControlsMonth.classList.remove('tabs__controls--active');
    tabMonth.classList.remove('tabs__list--active');
  });
  // iosVhFix();

  // Modules
  // ---------------------------------
  let slider = new Glide('.glide', {
    type: 'carousel',
    startAt: 0,
    perView: 4,
    gap: 40,
    breakpoints: {
      1199: {
        perView: 2,
        gap: 30,
      },
      767: {
        perView: 1,
        gap: 20,
      },
    },
  }).mount();

  const buttonNext = document.querySelector('.carousel__button-next');
  const buttonPrev = document.querySelector('.carousel__button-prev');
  const carousel = document.querySelectorAll('.carousel__item');
  // const carouselLength = carousel.length;

  buttonNext.addEventListener('click', () => {
    buttonPrev.disabled = false;
    carousel[0].classList.remove('carousel__item--active');
    carousel[1].classList.add('carousel__item--active');
    buttonNext.disabled = true;
  });

  buttonPrev.addEventListener('click', () => {
    carousel[1].classList.remove('carousel__item--active');
    carousel[0].classList.add('carousel__item--active');
    buttonNext.disabled = false;
    buttonPrev.disabled = true;
  });

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    // initModals();
    phoneNumber.addEventListener('input', () => {
      const valueLength = phoneNumber.value.length;

      if (valueLength < PHONE_NUMBER_LENGTH) {
        phoneNumber.setCustomValidity('Введите номер телефона в формате: 8 800 788 20 20');
      } else if (valueLength > PHONE_NUMBER_LENGTH) {
        phoneNumber.setCustomValidity('Номер телефона не должен превышать 11 знаков');
      } else {
        phoneNumber.setCustomValidity('');
      }

      phoneNumber.reportValidity();
    });
  });
});

// ---------------------------------

// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.

// привязывайте js не на классы, а на дата атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✅

// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.

// для адаптивного JS используейтся matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// используйте .closest(el);
