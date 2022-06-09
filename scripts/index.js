import { Card } from "./Card.js";
import { FormValidator } from "./FormValidator.js";
import { PopupWithForm } from "./PopupWithForm.js";
import { PopupWithImage } from "./PopupWithImage.js";
import { Section } from "./Section.js";
import { UserInfo } from "./UserInfo.js";

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

//Валидация
const profileValidator = new FormValidator(config, formProfileElement);
const photoValidator = new FormValidator(config, formPhotoElement);
profileValidator.enableValidation();
photoValidator.enableValidation();


//создания юзера
const profileInfo = new UserInfo(
  { nameSelector: '.profile__name',
    aboutSelector: '.profile__about'}
);

//Создание карточек
function openImagePopup(item) {
  const popupWithImage = new PopupWithImage('.popup_place_image');
  popupWithImage.open(item);
}

function createCard(item) {
  const card = new Card(item, '.template', () => {
    openImagePopup(item);
    });
    const cardElement = card.generateCard();
    return cardElement;
}

const initialCardsList = new Section (
  { items: initialCards, 
    renderer: (item) => { initialCardsList.addItem(createCard(item)); }
  }, 
  '.cards');

initialCardsList.renderItems();


function addCard() {
  const itemCard = { name: titleInput.value, link: linkInput.value };
  initialCardsList.addItem(createCard(itemCard));
}


// попап с карточкой
const cardFormPopup = new PopupWithForm(
  { popupSelector: '.popup_place_cards', 
    handleSubmitForm: () => {
      addCard();
      cardFormPopup.close(); }
});

cardFormPopup.setEventListeners();

buttonAdd.addEventListener('click', () => {
  photoValidator.deleteErrors();
  cardFormPopup.open();
});


// попап с профилем
const profileFormPopup = new PopupWithForm(
  { popupSelector: '.popup_place_profile', 
    handleSubmitForm: (item) => { 
      profileInfo.setUserInfo(item);
      profileFormPopup.close(); }
  }
);

buttonEdit.addEventListener('click', () => {
  photoValidator.deleteErrors();
  const info = profileInfo.getUserInfo();
  nameInput.value = info.name;
  aboutInput.value = info.about;
  profileFormPopup.open();
});

