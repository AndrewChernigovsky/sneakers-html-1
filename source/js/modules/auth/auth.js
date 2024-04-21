const registrationButton = document.querySelector('.header-navigation__registration-button');
const registrationForm = document.querySelector('.registration-modal');
const usersProfile = document.querySelector('.user-navigation-header');
const imageUploadButton = registrationForm.querySelector('.registration-modal__input-image-upload');
const usersImagePreviews = registrationForm.querySelector('.registration-modal__image-preview');

const MAX_IMAGE_SIZE = 2000000;

const reader = new FileReader();

function uploadImg () {
  const file = imageUploadButton.files[0];
  if(file.size > MAX_IMAGE_SIZE) {
    registrationForm.querySelector('.registration-modal__error-mesage').textContent = 'Размер файла не должен привышать 2 Мб';
    registrationForm.querySelector('.registration-modal__error-mesage').classList.remove('hidden');
  } else {
    registrationForm.querySelector('.registration-modal__error-mesage').classList.add('hidden');
    reader.addEventListener('load', onImageUpload)
    reader.readAsDataURL(file);
  }
}

function onImageUpload () {
  usersImagePreviews.src = reader.result;
}


function onSubmitForm (evt) {
    evt.preventDefault();
    const userName = registrationForm.querySelector('#name').value;
    const userEmail = registrationForm.querySelector('#email').value;
    const userAvatarUrl = usersImagePreviews.src;
    const userProfile = {
        name: userName,
        email: userEmail,
        avatarUrl: userAvatarUrl
    }
    localStorage.setItem('userProfile', JSON.stringify(userProfile))
    registrationForm.classList.add('hidden');
    imageUploadButton.removeEventListener('change', uploadImg);
    registrationForm.removeEventListener('submit', onSubmitForm);
    checkLocalStorage();
}

function checkLocalStorage () {
  registrationButton.addEventListener('click', onRegistrationButton);
  if(localStorage.getItem('userProfile') !== null) {
      registrationButton.classList.add('hidden');
      usersProfile.classList.remove('hidden');
      const profile = localStorage.getItem('userProfile');
      const userProfile = JSON.parse(profile);
      usersProfile.querySelector('.user-profile__img').src = userProfile.avatarUrl;
      usersProfile.querySelector('.user-navigation-header__title').textContent = userProfile.name;
      registrationButton.removeEventListener('click', onRegistrationButton);
  }
}

function onRegistrationButton () {
  registrationForm.classList.remove('hidden');
  imageUploadButton.addEventListener('change', uploadImg);
  registrationForm.addEventListener('submit', onSubmitForm);
}

function onWindowLoad () {
    checkLocalStorage();
}

export { onWindowLoad }
