export const initialCards = [
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
  
export const config = {
  formSelector: '.popup__form',
  inputSelector: '.popup__form-item',
  submitButtonSelector: '.popup__save-button',
  inactiveButtonClass: 'popup__save-button_disabled',
  inputErrorClass: 'popup__form-item_error',
  errorClass: 'popup__error_visible'
}
  
export const buttonEdit = document.querySelector('.profile__edit-button');
export const profilePopUp = document.querySelector('.popup_place_profile');
export const formProfileElement = profilePopUp.querySelector('.popup__form');
  
export const nameInput =  document.querySelector('.popup__form-item_el_name');
export const aboutInput = document.querySelector('.popup__form-item_el_about');
  
export const buttonAdd = document.querySelector('.profile__add-button');
export const photoPopUp = document.querySelector('.popup_place_cards');
export const formPhotoElement = photoPopUp.querySelector('.popup__form');
  
export const titleInput =  document.querySelector('.popup__form-item_el_title');
export const linkInput = document.querySelector('.popup__form-item_el_link');