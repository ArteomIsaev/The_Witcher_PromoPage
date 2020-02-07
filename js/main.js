var mySwiper = new Swiper('.swiper-container', {
    slidesPerView: 2,
    spaceBetween: 2,
    loop: true,
    navigation: {
        nextEl: '.arrow',
      },
    breakpoints: {
      540: {
        slidesPerView: 1,
        spaceBetween: 20
      }
    }
});

let menuBtn = document.querySelector('.menu-btn')
let menu = document.querySelector('.header')
menuBtn.addEventListener('click', () => {
  menu.classList.toggle('header-active')
  menuBtn.classList.toggle('menu-btn-active')
})