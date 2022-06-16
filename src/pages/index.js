import { Card } from "../components/Card.js";
import { FormValidator } from "../components/FormValidator.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { PopupWithImage } from "../components/PopupWithImage.js";
import { Section } from "../components/Section.js";
import { UserInfo } from "../components/UserInfo.js";
import './index.css';

import {
  initialCards, config, buttonEdit, profilePopUp, formProfileElement, 
  nameInput, aboutInput, buttonAdd, photoPopUp, formPhotoElement, titleInput, linkInput
} from '../utils/constants.js';


const profileValidator = new FormValidator(config, formProfileElement);
const photoValidator = new FormValidator(config, formPhotoElement);
profileValidator.enableValidation();
photoValidator.enableValidation();


const profileInfo = new UserInfo(
  { nameSelector: '.profile__name',
    aboutSelector: '.profile__about'}
);

const popupWithImage = new PopupWithImage('.popup_place_image');
popupWithImage.setEventListeners();

function createCard(item) {
  const card = new Card(item, '.template', () => {
    popupWithImage.open(item);
  });
    return card.generateCard();
}

const initialCardsList = new Section (
  { items: initialCards, 
    renderer: (item) => { initialCardsList.addItem(createCard(item)); }
  }, 
  '.cards');

initialCardsList.renderItems();



function addCard(item) {
  const itemCard = { name: item.title, link: item.link };
  initialCardsList.addItem(createCard(itemCard));
}

const cardFormPopup = new PopupWithForm(
  { popupSelector: '.popup_place_cards', 
    handleSubmitForm: (item) => {
      addCard(item);
      cardFormPopup.close(); }
});
cardFormPopup.setEventListeners();

buttonAdd.addEventListener('click', () => {
  photoValidator.deleteErrors();
  cardFormPopup.open();
});

const profileFormPopup = new PopupWithForm(
  { popupSelector: '.popup_place_profile', 
    handleSubmitForm: (item) => { 
      profileInfo.setUserInfo(item);
      profileFormPopup.close(); }
  }
);

buttonEdit.addEventListener('click', () => {
  profileValidator.deleteErrors();
  const info = profileInfo.getUserInfo();
  nameInput.value = info.name;
  aboutInput.value = info.about;
  profileFormPopup.setEventListeners();
  profileFormPopup.open();
});

