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

export const popUpAvatar = document.querySelector('.popup_place_avatar');
export const formElementAvatar = popUpAvatar.querySelector('.popup__form');
  
export const nameInput =  document.querySelector('.popup__form-item_el_name');
export const aboutInput = document.querySelector('.popup__form-item_el_about');
  
export const buttonAdd = document.querySelector('.profile__add-button');
export const photoPopUp = document.querySelector('.popup_place_cards');
export const formPhotoElement = photoPopUp.querySelector('.popup__form');
export const buttonProfileImage = document.querySelector('.profile__avatar-zone');
  
export const titleInput =  document.querySelector('.popup__form-item_el_title');
export const linkInput = document.querySelector('.popup__form-item_el_link');

export const linkAvatarInput = document.querySelector('.popup__form-item_el_link-avatar');