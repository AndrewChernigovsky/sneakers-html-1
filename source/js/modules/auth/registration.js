import { checkLocalStorage } from "./auth";

const registrationForm = document.querySelector('.registration-modal');
const imageUploadButton = document.querySelector('.registration-modal__input-image-upload');
const usersImagePreviews = document.querySelector('.registration-modal__image-preview');
const registrationButton = document.querySelector('.registration-modal__button');
const registrationInfoSize = document.querySelector('.registration-modal__info-size');

const MAX_IMAGE_SIZE = 2000000;

const reader = new FileReader();

function uploadImg() {
  if (registrationForm !== null) {
    const file = imageUploadButton.files[0];
    if (file.size > MAX_IMAGE_SIZE) {
      registrationButton.setAttribute('disabled', true);
      registrationInfoSize.style.color = 'red';
    } else {
      reader.addEventListener('load', onImageUpload)
      reader.readAsDataURL(file);
      registrationInfoSize.style.color = 'black';
      registrationButton.removeAttribute('disabled');
    }
  }
}

function onImageUpload() {
  if (registrationForm !== null) {
    usersImagePreviews.src = reader.result;
  }
}


function onSubmitForm(evt) {
  if (registrationForm !== null) {
    evt.preventDefault();
    const userName = registrationForm.querySelector('#name').value;
    const userEmail = registrationForm.querySelector('#email').value;
    const userAvatarUrl = usersImagePreviews.src;
    const userProfile = {
      name: userName,
      email: userEmail,
      avatarUrl: userAvatarUrl,
    }
    localStorage.setItem('userProfile', JSON.stringify(userProfile))
    registrationForm.classList.add('hidden');
    imageUploadButton.removeEventListener('change', uploadImg);
    registrationForm.removeEventListener('submit', onSubmitForm);
    checkLocalStorage();
  }
}
export { uploadImg, onSubmitForm }
