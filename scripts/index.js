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
  inputErrorClass: 'popup__input-error',
  errorClass: 'popup__error_visible'
}

const listContainer = document.querySelector('.cards');
const template = document.querySelector('.template');
const popupWindows = document.querySelectorAll('.popup'); 

const editLink = document.querySelector('.profile__edit-button');
const profilePopUp = document.querySelector('.popup_place_profile');
const formProfileElement = profilePopUp.querySelector('.popup__form');
const popupCloseButtons = document.querySelectorAll('.popup__close-button');

const nameInput =  document.querySelector('.popup__form-item_el_name');
const aboutInput = document.querySelector('.popup__form-item_el_about');
const profileName = document.querySelector('.profile__name');
const profileAbout = document.querySelector('.profile__about');

const addLink = document.querySelector('.profile__add-button');
const photoPopUp = document.querySelector('.popup_place_cards');
const formPhotoElement = photoPopUp.querySelector('.popup__form');

const imagePopUp = document.querySelector('.popup_place_image');

const popupImage = document.querySelector('.popup__image');
const popupName = document.querySelector('.popup__name');
const titleInput =  document.querySelector('.popup__form-item_el_title');
const linkInput = document.querySelector('.popup__form-item_el_link');

function getElement(item) {
  const templateElement = template.content.cloneNode(true);
  const removeButton = templateElement.querySelector('.card__trash');
  const likeButton = templateElement.querySelector('.card__like');
  const cardImage = templateElement.querySelector('.card__image');
  const cardName = templateElement.querySelector('.card__title');

  cardImage.src = item.link;
  cardImage.alt = item.name;
  cardName.textContent = item.name;

  likeButton.addEventListener('click', likeCard);
  removeButton.addEventListener('click', removeCard);
  cardImage.addEventListener('click', () => {
    openPopUp(imagePopUp)
    popupImage.src = cardImage.src;
    popupImage.alt = cardName.textContent;
    popupName.textContent = cardName.textContent;
  });

  return templateElement;
}

function render() {
  const html = initialCards.map(getElement);
  listContainer.append(...html);
}

function likeCard(evt) {
  evt.target.classList.toggle('card__like_active');
}

function removeCard(evt) {
  evt.target.closest('.card').remove();
}

function openPopUp(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', escClose);
}

function closePopUp(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', escClose);
}

function overlayClose(evt, popup) {
  if (evt.currentTarget === evt.target) {
    closePopUp(popup);
  }
}

function escClose(evt) {
  const popupOpened = document.querySelector('.popup_opened');
  if (evt.key === 'Escape') {
    closePopUp(popupOpened);
  }
}

function handlerEditForm(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileAbout.textContent = aboutInput.value;
  closePopUp(profilePopUp);
}

function handlerAddCard(evt) {
  evt.preventDefault();
  const element = getElement({name: titleInput.value, link: linkInput.value});
  listContainer.prepend(element);
  evt.target.reset();
  closePopUp(photoPopUp);
}

function deleteErrors(popup) {
  const inputs = popup.querySelectorAll('.popup__form-item');
  const errors = popup.querySelectorAll('.popup__input-error');
  Array.from(inputs).forEach((input) => {
    Array.from(errors).forEach((error) => {
      hideError(input, error);
    });
  });
}

render();

editLink.addEventListener('click', () => {
  nameInput.value = profileName.textContent;
  aboutInput.value = profileAbout.textContent;
  openPopUp(profilePopUp);
  deleteErrors(profilePopUp);
  toggleButtonState(profilePopUp.querySelector(config.formSelector), config);
});

addLink.addEventListener('click', () => {
  openPopUp(photoPopUp); 
  toggleButtonState(photoPopUp.querySelector(config.formSelector), config);
});

formProfileElement.addEventListener('submit', handlerEditForm);
formPhotoElement.addEventListener('submit', handlerAddCard);

popupCloseButtons.forEach((button) => {
  const popup = button.closest('.popup');
  button.addEventListener('click', () => closePopUp(popup));
});

popupWindows.forEach((popupWindow) => {
  popupWindow.addEventListener('click', (evt) => overlayClose(evt, evt.target));
});