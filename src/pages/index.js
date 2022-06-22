import { Card } from "../components/Card.js";
import { FormValidator } from "../components/FormValidator.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { PopupWithImage } from "../components/PopupWithImage.js";
import { PopupWithConfirmation } from "../components/PopupWithConfirmation.js";
import { Section } from "../components/Section.js";
import { UserInfo } from "../components/UserInfo.js";
import { Api } from "../components/Api.js";
import './index.css';

import {
  config, buttonEdit, formProfileElement, buttonProfileImage, linkAvatarInput,
  nameInput, aboutInput, buttonAdd, formPhotoElement, formElementAvatar
} from '../utils/constants.js';


const profileValidator = new FormValidator(config, formProfileElement);
const avatarValidator = new FormValidator(config, formElementAvatar);
const photoValidator = new FormValidator(config, formPhotoElement);
profileValidator.enableValidation();
photoValidator.enableValidation();
avatarValidator.enableValidation();

const api = new Api('nomoreparties.co/v1/cohort-43/', 'f7a8d2c2-99fc-4e55-b877-773be6a3ed35');

const profileInfo = new UserInfo(
  { nameSelector: '.profile__name',
    aboutSelector: '.profile__about',
    avatarSelector: '.profile__avatar'}
);

const initialCardsList = new Section (
  { renderer: (item, id) => { 
      initialCardsList.addItem(createCard(item, id)); 
  }}, 
  '.cards');

Promise.all([api.getUser(), api.getCards()])
  .then(([userData, cardData]) => {
    profileInfo.setUserInfo(userData);
    initialCardsList.renderItems(cardData, userData._id);
  })
  .catch((err) => console.log(err));



buttonEdit.addEventListener('click', () => {
  const info = profileInfo.getUserInfo()
  nameInput.value = info.name;
  aboutInput.value = info.about;
  profileValidator.deleteErrors();
  profileFormPopup.open();
});
  
buttonAdd.addEventListener('click', () => {
  photoValidator.deleteErrors();
  cardFormPopup.open();
});
  
buttonProfileImage.addEventListener('click', () => {
  const info = profileInfo.getUserInfo()
  linkAvatarInput.value = info.avatar;
  avatarValidator.deleteErrors();
  popupEditAvatar.open();
});


const popupWithImage = new PopupWithImage('.popup_place_card');
popupWithImage.setEventListeners();


const profileFormPopup = new PopupWithForm(
  { popupSelector: '.popup_place_profile', 
    handleSubmitForm: (item) => { 
      profileFormPopup.isLoading(true);
      api.editUserInfo(item)
        .then((data) => {
          profileInfo.setUserInfo(data);
        })
        .catch((err) => console.log(err));
      profileFormPopup.isLoading (false);
      profileFormPopup.close(); 
    }
  }
);
profileFormPopup.setEventListeners();


const popupEditAvatar = new PopupWithForm(
  { popupSelector: '.popup_place_avatar', 
    handleSubmitForm: (item) => {
      popupEditAvatar.isLoading(true);
      api.editAvatar(item)
        .then((data) => {
        profileInfo.setUserInfo(data);
        })
        .catch((err) => console.log(err));
      popupEditAvatar.isLoading(false);
      popupEditAvatar.close(); 
    }
});
popupEditAvatar.setEventListeners();


const cardFormPopup = new PopupWithForm(
  { popupSelector: '.popup_place_cards', 
    handleSubmitForm: (item) => {
      cardFormPopup.isLoading(true);
      api.addNewCard(item)
        .then((data) => {
          initialCardsList.addItem(createCard(data, data.owner._id));;
        })
        .catch((err) => console.log(err));
      cardFormPopup.isLoading(false);
      cardFormPopup.close(); }
});
cardFormPopup.setEventListeners();


function createCard(item, id) {
  const card = new Card({ 
    item: item, 
    cardSelector: '.template', 
    handleImageClick: () => { popupWithImage.open(item); },
    handleLikeClick: () => {
      if (card.isLiked(id)) {
        card.likeCard();
        api.deleteLike(card._id)
        .then((data) => {
          card.updateLikes(data.likes);
        })
        .catch((err) => console.log(err));
      } else {
        card.likeCard();
        api.addLike(card._id)
        .then((data) => {
          card.updateLikes(data.likes);
        })
        .catch((err) => console.log(err));
      }
    }, 
    handleDeleteClick: () => {
      const popUpDelete = new PopupWithConfirmation({
        popupSelector: '.popup_place_confirmation',
        handleSubmit: () => {
          api.deleteCard(card._id)
            .then((data) => {
              card.removeCard();
            })
            .catch((err) => console.log(err));
          popUpDelete.close();
        }
      });
      popUpDelete.open();
      popUpDelete.setEventListeners();
    }
  }
  );
    return card.generateCard(id);
}