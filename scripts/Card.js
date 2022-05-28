export class Card {
    constructor(item, cardSelector, handleImageClick) {
      this._name = item.name;
      this._link = item.link;
      this._cardSelector = cardSelector;
      this._handleImageClick = handleImageClick;
    }
  
    _getTemplate() {
        const templateElement = document
        .querySelector(this._cardSelector)
        .content
        .querySelector('.card')
        .cloneNode(true);
  
        return templateElement;
    }
    
    _removeCard() {
      this._element.remove();
      this._element = null;
    }
  
    _likeCard() {
      this._buttonLike.classList.toggle('card__like_active');
    }
  
    _setEventListeners() {
      this._buttonLike = this._element.querySelector('.card__like'); 
      this._buttonLike.addEventListener('click', () => { this._likeCard() });
      this._cardImage.addEventListener('click', () => { this._handleImageClick() });;
      this._element.querySelector('.card__trash').addEventListener('click', () => { this._removeCard() });
    }
  
    generateCard() {
      this._element = this._getTemplate();
      this._cardImage = this._element.querySelector('.card__image'); 
      this._cardImage.src = this._link;
      this._cardImage.alt = this._name;
      this._element.querySelector('.card__title').textContent = this._name;
  
      this._setEventListeners();
      return this._element;
    }
  }