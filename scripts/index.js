let editLink = document.querySelector('.profile__edit-button');
let popupWindow = document.querySelector('.popup');
let popupCloseButton = document.querySelector('.popup__close-button');

let formElement = document.querySelector('.popup__form');
let nameInput =  document.querySelector('.popup__form-item_el_name');
let aboutInput = document.querySelector('.popup__form-item_el_about');
let profileName = document.querySelector('.profile__name');
let profileAbout = document.querySelector('.profile__about');

function togglePopUp() {
  popupWindow.classList.toggle('popup_opened');
  nameInput.value = profileName.textContent;
  aboutInput.value = profileAbout.textContent;
}

function overlayClose(event) {
  if (event.currentTarget === event.target) {
    togglePopUp();
  }
}

editLink.addEventListener('click', togglePopUp);
popupCloseButton.addEventListener('click', togglePopUp);
popupWindow.addEventListener('click', overlayClose);

function formSubmitHandler(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileAbout.textContent = aboutInput.value;
  togglePopUp();
}
formElement.addEventListener('submit', formSubmitHandler);