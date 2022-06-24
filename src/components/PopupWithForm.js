import { Popup } from "./Popup.js";

export class PopupWithForm extends Popup {
  constructor({ popupSelector, handleSubmitForm }) {
    super(popupSelector);
    this._handleSubmitForm = handleSubmitForm;
    this._popupForm = this._popup.querySelector('.popup__form');
    this._inputList = this._popupForm.querySelectorAll('.popup__form-item');
    this._buttonSave = this._popup.querySelector('.popup__save-button');
    this._buttonTextDefault = this._buttonSave.textContent;
  }

  _getInputValues() {
    const inputs = {};
    this._inputList.forEach((input) => {
        inputs[input.name] = input.value });
    return inputs;
  }

  _handleSubmit = (evt) => {
    evt.preventDefault();
    this._handleSubmitForm(this._getInputValues());
  }

  setEventListeners() {
    this._popupForm.addEventListener('submit', this._handleSubmit);
    super.setEventListeners();
  }

  close() {
    super.close();
    this._popupForm.reset();
  }

  isLoading(state) {
    state ? this._buttonSave.textContent = "Сохранение..." : this._buttonSave.textContent = this._buttonTextDefault;
  }
}