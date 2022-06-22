export class Card {
  constructor({ item, cardSelector, handleImageClick, handleLikeClick, handleDeleteClick} ) {
    this._name = item.name;
    this._link = item.link;
    this._cardSelector = cardSelector;
    this._handleImageClick = handleImageClick;
    this._handleLikeClick = handleLikeClick;
    this._handleDeleteClick = handleDeleteClick;

    this._likes = item.likes;

    this._id = item._id;
    this._ownerId = item.owner._id;
  }
  
  _getTemplate() {
    const templateElement = document
      .querySelector(this._cardSelector)
      .content
      .querySelector('.card')
      .cloneNode(true);
  
    return templateElement;
  }
    
  removeCard() {
    this._element.remove();
    this._element = null;
  }
  
  likeCard() {
    this._buttonLike.classList.toggle('card__like_active');
  }

  isLiked(ownId) {
    return this._likes.some((item) => { 
      return item._id === ownId; 
    });
  }

  updateLikes(likes) {
    this._likes = likes;
    this._likeNumber = this._element.querySelector('.card__like-number');
    this._likeNumber.textContent = this._likes.length;
  }
  
  _setEventListeners() {
    this._buttonLike.addEventListener('click', () => { this._handleLikeClick() });
    this._cardImage.addEventListener('click', () => { this._handleImageClick() });;
    this._buttonTrash.addEventListener('click', () => { this._handleDeleteClick() });
  }
  
  generateCard(id) {
    this._element = this._getTemplate();
    this._cardImage = this._element.querySelector('.card__image'); 
    this._buttonTrash = this._element.querySelector('.card__trash');
    this._buttonLike = this._element.querySelector('.card__like');

    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    this._element.querySelector('.card__title').textContent = this._name;

    this.updateLikes(this._likes);

    if (this._ownerId !== id) {
      this._buttonTrash.classList.add('card__trash_disabled');
    }

    if (this.isLiked(id)) {
      this.likeCard();
    }

    this._setEventListeners();
    return this._element;
  }
}