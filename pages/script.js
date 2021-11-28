let popup = document.querySelector('.popup');
let openPopup = document.querySelector('.profile__edit-button');
let closePopup = document.querySelector('.popup__close-button');
let popupForm = document.querySelector('.popup__form');
let profileTitle = document.querySelector('.profile__title');
let profileSubtitle = document.querySelector('.profile__subtitle');
let inputName = popupForm.querySelector('.popup__input-name');
let inputJob = popupForm.querySelector('.popup__input-job');

function open() {
  popup.classList.add('popup_opened');
  profileTitle.textContent = inputName.value;
  profileSubtitle.textContent = inputJob.value;
}

function close() {
  popup.classList.remove('popup_opened');
}
openPopup.addEventListener('click', open);
closePopup.addEventListener('click', close);

function formSubmitHandler (evt) {
  evt.preventDefault();
  profileTitle.textContent = inputName.value;
  profileSubtitle.textContent = inputJob.value;
  close();
}

popupForm.addEventListener('submit', formSubmitHandler);
