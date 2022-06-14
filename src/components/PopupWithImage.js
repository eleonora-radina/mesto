import { Popup } from "./Popup.js";

export class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
  }

  open(item) {
    this._popup.querySelector('.popup__image').src = item.link;
    this._popup.querySelector('.popup__image').alt = item.name;
    this._popup.querySelector('.popup__name').textContent = item.name;
    super.open();
  }
}