export class FormValidator {
  constructor(config, formElement) {
    this._formSelector = config.formSelector;
    this._inputSelector = config.inputSelector;
    this._submitButtonSelector = config.submitButtonSelector;
    this._inactiveButtonClass = config.inactiveButtonClass;
    this._inputErrorClass = config.inputErrorClass;
    this._errorClass = config.errorClass;
    this._formElement = formElement;
  }

  _hideError(input, error) {
    error.textContent = '';
    input.classList.remove(this._inputErrorClass);
  }

  _showError(input, error) {
    error.textContent = input.validationMessage;
    input.classList.add(this._inputErrorClass);
  }

  _checkInputValidity(input, error) {
    if (input.validity.valid) {
      this._hideError(input, error);
    } else {
      this._showError(input, error);
      }
  }

  _toggleButtonState() {
    const validResult = !this._formElement.querySelector(this._formSelector).checkValidity();
    const button = this._formElement.querySelector(this._submitButtonSelector);

    button.disabled = validResult;
    button.classList.toggle(this._inactiveButtonClass, validResult);
  }

  _handleFormInput(input) {
    const errorElement = this._formElement.querySelector(`.${input.id}-error`);

    this._checkInputValidity(input, errorElement);
    this._toggleButtonState();
  }

  deleteErrors(popup) {
    const inputs = popup.querySelector(this._formSelector).querySelectorAll(this._inputSelector);
    const errors = popup.querySelector(this._formSelector).querySelectorAll('.popup__input-error');
    Array.from(inputs).forEach((input) => {
      Array.from(errors).forEach((error) => {
        this._hideError(input, error);
      });
    });
  }

  enableValidation() {
    const inputList = this._formElement.querySelectorAll(this._inputSelector);
    Array.from(inputList).forEach((input) => {
      input.addEventListener('input', () => this._handleFormInput(input));
    });
  }
}