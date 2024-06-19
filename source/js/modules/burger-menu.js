const burgerMenu = document.querySelector('.main-header__burger-menu-container');
const burgerButton = document.querySelector('.main-header__burger-button');

function toggleBurgerMenu () {
  if (burgerMenu.classList.contains("main-header__burger-menu-container--open")) {
    burgerMenu.classList.remove('main-header__burger-menu-container--open');
    burgerMenu.classList.add('main-header__burger-menu-container--close');
  } else {
    burgerMenu.classList.remove('main-header__burger-menu-container--close');
    burgerMenu.classList.add('main-header__burger-menu-container--open');
  }

}

export function burgerMenuToggle() {
  burgerMenu.classList.remove('.main-header__burger-menu-container--no-js');
  burgerButton.addEventListener('click', toggleBurgerMenu)
}
