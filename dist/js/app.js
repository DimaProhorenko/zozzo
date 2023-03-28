const burgerEl = document.querySelector('.burger');
const navEl = document.querySelector('.header__nav');


burgerEl.addEventListener('click', () => {
    burgerEl.classList.toggle('burger--open');
    navEl.classList.toggle('header__nav--open');
})

AOS.init();
const rellax = new Rellax('.rellax', {
    horizontal: true,
    breakpoints: [1000]
})