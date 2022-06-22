import { Popup } from "./Popup.js";

export class PopupWithConfirmation extends Popup {
  constructor({ popupSelector, handleSubmit }) {
    super(popupSelector);
    this._handleSubmit = handleSubmit;
  }

  setEventListeners() {
    this._button = this._popup.querySelector('.popup__save-button');
    this._button.addEventListener('click', this._handleSubmit);
    super.setEventListeners();
  }
}