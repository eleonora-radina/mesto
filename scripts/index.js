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

const listContainer = document.querySelector('.cards');
const template = document.querySelector('.template');

const editLink = document.querySelector('.profile__edit-button');
const profilePopUp = document.querySelector('.popup_place_profile');
const formProfileElement = profilePopUp.querySelector('.popup__form');
const popupProfileCloseButton = profilePopUp.querySelector('.popup__close-button');

const nameInput =  document.querySelector('.popup__form-item_el_name');
const aboutInput = document.querySelector('.popup__form-item_el_about');
const profileName = document.querySelector('.profile__name');
const profileAbout = document.querySelector('.profile__about');

const addLink = document.querySelector('.profile__add-button');
const photoPopUp = document.querySelector('.popup_place_cards');
const formPhotoElement = photoPopUp.querySelector('.popup__form');
const popupPhotoCloseButton = photoPopUp.querySelector('.popup__close-button');

const imagePopUp = document.querySelector('.popup_place_image');
const popupImageCloseButton = imagePopUp.querySelector('.popup__close-button');

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
    document.querySelector('.popup__image').src = cardImage.src;
    document.querySelector('.popup__name').textContent = cardName.textContent;
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
}

function overlayClose(event) {
  if (event.currentTarget === event.target) {
    togglePopUp();
  }
}

editLink.addEventListener('click', togglePopUp);
popupCloseButton.addEventListener('click', togglePopUp);
popupWindow.addEventListener('click', overlayClose);

function formSubmitHandler(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileAbout.textContent = aboutInput.value;
  togglePopUp();
}
formElement.addEventListener('submit', formSubmitHandler);