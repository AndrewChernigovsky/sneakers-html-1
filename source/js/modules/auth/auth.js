import { uploadImg, onSubmitForm } from "./registration";

const registrationForm = document.querySelector('.registration-modal');
const registrationButton = document.querySelector('.header-navigation__registration-button');
const usersProfile = document.querySelector('.user-navigation-header');
const imageUploadButton = document.querySelector('.registration-modal__input-image-upload');

function checkLocalStorage() {
  if (localStorage.getItem('userProfile') !== null) {

    if (registrationForm !== null) {

      registrationButton.classList.add('hidden');
      usersProfile.classList.remove('hidden');
      const profile = localStorage.getItem('userProfile');
      const userProfile = JSON.parse(profile);
      usersProfile.querySelector('.user-profile__img').src = userProfile.avatarUrl;
      usersProfile.querySelector('.user-navigation-header__title').textContent = userProfile.name;
      registrationButton.removeEventListener('click', onRegistrationButton);
    }
  }
}

function onRegistrationButton() {
  if (registrationForm !== null) {
    registrationForm.classList.remove('hidden');
    imageUploadButton.addEventListener('change', uploadImg);
    registrationForm.addEventListener('submit', onSubmitForm);
  }
}

function onWindowLoad() {
  if (registrationForm !== null) {
    registrationButton.addEventListener('click', onRegistrationButton);
    checkLocalStorage();
  }
}


export { onWindowLoad, checkLocalStorage }
