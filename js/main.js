const swiper = new Swiper('.main-slider', {
   spaceBetween: 30,
   loop: true,

   // Navigation arrows
   navigation: {
      nextEl: '.main-slider-arrow',
   },

   breakpoints: {
      320: {
         slidesPerView: 1,
      },
      768: {
         slidesPerView: 2,
      }
   }

});

let burger = document.querySelector('.menu-burger');
let closeMenu = document.querySelector('.header__menu-close');
let menuMobile = document.querySelector('.header');

burger.addEventListener('click', () => {
   menuMobile.style.display = 'block';
});

closeMenu.addEventListener('click', () => {
   menuMobile.style.display = 'none';
});

const modalWindow = document.querySelector('.modal');
const buttonPlay = document.querySelector('.main__button-play');

buttonPlay.addEventListener('click', () => {
   modalWindow.classList.add('active');
});

modalWindow.addEventListener('click', (e) => {
   const isModal = e.target.closest('.modal__inner');

   if (!isModal) {
      modalWindow.classList.remove('active');
   }
});