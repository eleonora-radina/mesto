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
    }
  
    _likeCard() {
      this._element.querySelector('.card__like').classList.toggle('card__like_active');
    }
  
    _setEventListeners() {
      this._element.querySelector('.card__like').addEventListener('click', () => { this._likeCard() });
      this._element.querySelector('.card__trash').addEventListener('click', () => { this._removeCard() });
      this._element.querySelector('.card__image').addEventListener('click', () => { this._handleImageClick(this._element) });;
    }
  
    generateCard() {
      this._element = this._getTemplate();
      this._element.querySelector('.card__image').src = this._link;
      this._element.querySelector('.card__image').alt = this._name;
      this._element.querySelector('.card__title').textContent = this._name;
  
      this._setEventListeners();
      return this._element;
    }
  }