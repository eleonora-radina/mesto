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

const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-43', 
  headers: {
    authorization:'f7a8d2c2-99fc-4e55-b877-773be6a3ed35',
    'Content-Type': 'application/json'
  }
});

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
          profileFormPopup.close(); 
        })
        .catch((err) => console.log(err))
        .finally(() => { profileFormPopup.isLoading(false); });
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
        popupEditAvatar.close(); 
        })
        .catch((err) => console.log(err))
        .finally(() => { popupEditAvatar.isLoading(false); });
    }
});
popupEditAvatar.setEventListeners();


const cardFormPopup = new PopupWithForm(
  { popupSelector: '.popup_place_cards', 
    handleSubmitForm: (item) => {
      cardFormPopup.isLoading(true);
      api.addNewCard(item)
        .then((data) => {
          initialCardsList.addItem(createCard(data, data.owner._id));
          cardFormPopup.close();
        })
        .catch((err) => console.log(err))
        .finally(() => { cardFormPopup.isLoading(false); });
      }
});
cardFormPopup.setEventListeners();


const popUpDelete = new PopupWithConfirmation({
  popupSelector: '.popup_place_confirmation',
});
popUpDelete.setEventListeners();


function createCard(item, id) {
  const card = new Card({ 
    item: item, 
    cardSelector: '.template', 

    handleImageClick: () => { 
      popupWithImage.open(item); 
    },

    handleLikeClick: () => {
      if (card.isLiked(id)) {
        api.deleteLike(card._id)
        .then((data) => {
          card.updateLikes(data.likes);
          card.likeCard();
        })
        .catch((err) => console.log(err));
      } else {
        api.addLike(card._id)
        .then((data) => {
          card.updateLikes(data.likes);
          card.likeCard();
        })
        .catch((err) => console.log(err));
      }
    }, 

    handleDeleteClick: (card) => {
      popUpDelete.open();
      popUpDelete.setSubmitAction(() => {
        api.deleteCard(card._id)
            .then(() => {
              card.removeCard();
              popUpDelete.close();
            })
            .catch((err) => console.log(err));
      })
    }
  }
  );
    return card.generateCard(id);
}