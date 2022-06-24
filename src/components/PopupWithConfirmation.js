import { Popup } from "./Popup.js";

export class PopupWithConfirmation extends Popup {
  constructor({ popupSelector }) {
    super(popupSelector);
  }

setSubmitAction(action) {
 this._handleSubmit = action;
}

setEventListeners() {
  this._button = this._popup.querySelector('.popup__save-button');
  this._button.addEventListener('click', () => this._handleSubmit());
  super.setEventListeners();
  }
}