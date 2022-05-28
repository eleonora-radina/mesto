import { Card } from "./Card.js";
import { FormValidator } from "./FormValidator.js";

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

const config = {
  formSelector: '.popup__form',
  inputSelector: '.popup__form-item',
  submitButtonSelector: '.popup__save-button',
  inactiveButtonClass: 'popup__save-button_disabled',
  inputErrorClass: 'popup__form-item_error',
  errorClass: 'popup__error_visible'
}

const popupImage = document.querySelector('.popup__image');
const popupName = document.querySelector('.popup__name');
const imagePopUp = document.querySelector('.popup_place_image');
const popupWindows = document.querySelectorAll('.popup');

const listContainer = document.querySelector('.cards');

const buttonEdit = document.querySelector('.profile__edit-button');
const profilePopUp = document.querySelector('.popup_place_profile');
const formProfileElement = profilePopUp.querySelector('.popup__form');

const nameInput =  document.querySelector('.popup__form-item_el_name');
const aboutInput = document.querySelector('.popup__form-item_el_about');
const profileName = document.querySelector('.profile__name');
const profileAbout = document.querySelector('.profile__about');

const buttonAdd = document.querySelector('.profile__add-button');
const photoPopUp = document.querySelector('.popup_place_cards');
const formPhotoElement = photoPopUp.querySelector('.popup__form');

const titleInput =  document.querySelector('.popup__form-item_el_title');
const linkInput = document.querySelector('.popup__form-item_el_link');


const profileValidator = new FormValidator(config, formProfileElement);
const photoValidator = new FormValidator(config, formPhotoElement);
profileValidator.enableValidation();
photoValidator.enableValidation();

function createCard(item) {
  const card = new Card(item, '.template', () => {
    openCard(item);
  });
  const cardElement = card.generateCard();
  return cardElement;
}

initialCards.forEach((item) => {
  listContainer.append(createCard(item));
});

function addCard(evt) {
  evt.preventDefault();
  const itemCard = {name: titleInput.value, link: linkInput.value};
  listContainer.prepend(createCard(itemCard));
  formPhotoElement.reset();
  closePopUp(photoPopUp);
}

function openPopUp(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', escClose);
}

function openCard(item) {
  popupImage.src = item.link;
  popupImage.alt = item.name;
  popupName.textContent = item.name;
  openPopUp(imagePopUp);
}

function closePopUp(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', escClose);
}

function overlayClose(evt) {
  if ((evt.currentTarget === evt.target) || (evt.target.classList.contains('popup__close-button'))) {
    closePopUp(evt.currentTarget);
  }
}

function escClose(evt) {
  if (evt.key === 'Escape') {
    const popupOpened = document.querySelector('.popup_opened');
    closePopUp(popupOpened);
  }
}

function editForm(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileAbout.textContent = aboutInput.value;
  closePopUp(profilePopUp);
}

buttonEdit.addEventListener('click', () => {
  nameInput.value = profileName.textContent;
  aboutInput.value = profileAbout.textContent;
  profileValidator.deleteErrors();
  openPopUp(profilePopUp);
});

buttonAdd.addEventListener('click', () => {
  photoValidator.deleteErrors();
  openPopUp(photoPopUp);
});

formPhotoElement.addEventListener('submit', addCard);
formProfileElement.addEventListener('submit', editForm);


popupWindows.forEach((popupWindow) => {
  popupWindow.addEventListener('click', (evt) => overlayClose(evt));
});