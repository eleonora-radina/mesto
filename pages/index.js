import { Card } from "../components/Card.js";
import { FormValidator } from "../components/FormValidator.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { PopupWithImage } from "../components/PopupWithImage.js";
import { Section } from "../components/Section.js";
import { UserInfo } from "../components/UserInfo.js";

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

