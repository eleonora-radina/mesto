export class FormValidator {
  constructor(config, formElement) {
    this._formSelector = config.formSelector;
    this._inputSelector = config.inputSelector;
    this._submitButtonSelector = config.submitButtonSelector;
    this._inactiveButtonClass = config.inactiveButtonClass;
    this._inputErrorClass = config.inputErrorClass;
    this._errorClass = config.errorClass;
    this._formElement = formElement;
    this._button = this._formElement.querySelector(this._submitButtonSelector);
    this._inputList = this._formElement.querySelectorAll(this._inputSelector);
  }

  _hideError(input) {
    const errorElement = this._formElement.querySelector(`.${input.id}-error`);

    errorElement.textContent = '';
    input.classList.remove(this._inputErrorClass);
  }

  _showError(input) {
    const errorElement = this._formElement.querySelector(`.${input.id}-error`);

    errorElement.textContent = input.validationMessage;
    input.classList.add(this._inputErrorClass);
  }

  _checkInputValidity(input) {
    if (input.validity.valid) {
      this._hideError(input);
    } else {
      this._showError(input);
      }
  }

  _toggleButtonState() {
    const validResult = !this._formElement.checkValidity();
  
    this._button.disabled = validResult;
    this._button.classList.toggle(this._inactiveButtonClass, validResult);
  }

  _handleFormInput(input) {
    this._checkInputValidity(input);
    this._toggleButtonState();
  }

  deleteErrors() {
    Array.from(this._inputList).forEach((input) => {
        this._hideError(input);
    });
    this._toggleButtonState();
  }

  enableValidation() {
    Array.from(this._inputList).forEach((input) => {
      input.addEventListener('input', () => this._handleFormInput(input));
    });
  }
}