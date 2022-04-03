let editLink = document.querySelector('.profile__edit-button');
let popupWindow = document.querySelector('.popup');
let popupCloseButton = document.querySelector('.popup__close-button');
let formElement = document.querySelector('.popup__form');
let nameInput =  document.querySelector('.popup__form-item_el_name');
let aboutInput = document.querySelector('.popup__form-item_el_about');
let profileName = document.querySelector('.profile__name');
let profileAbout = document.querySelector('.profile__about');

function openPopUp() {
  popupWindow.classList.add('popup_opened');
  nameInput.value = profileName.textContent;
  aboutInput.value = profileAbout.textContent;
}

function closePopUp() {
  popupWindow.classList.remove('popup_opened');
}

// Обработчик «отправки» формы
function formSubmitHandler(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileAbout.textContent = aboutInput.value;
  closePopUp();
}

editLink.addEventListener('click', openPopUp);
popupCloseButton.addEventListener('click', closePopUp);
formElement.addEventListener('submit', formSubmitHandler);