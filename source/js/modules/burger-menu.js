const burgerMenu = document.querySelector('.main-header__burger-menu-container');
const burgerButton = document.querySelector('.main-header__burger-button');
const overlay = document.querySelector('.overlay');

function toggleBurgerMenu() {
  burgerMenu.classList.toggle('main-header__burger-menu-container--open');
  burgerMenu.classList.toggle('main-header__burger-menu-container--close');
  burgerButton.classList.toggle('main-header__burger-button--close');
  overlay.classList.toggle('active');
}

export function burgerMenuToggle() {
  burgerMenu.classList.remove('main-header__burger-menu-container--no-js');
  burgerButton.addEventListener('click', toggleBurgerMenu)
}
