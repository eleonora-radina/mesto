function deleteErrors(popup) {
  const inputs = popup.querySelectorAll('.popup__form-item');
  const errors = popup.querySelectorAll('.popup__input-error');
  Array.from(inputs).forEach((input) => {
    Array.from(errors).forEach((error) => {
      hideError(input, error);
    });
  });
}

function toggleButtonState (form, button, config) {
  const validResult = !form.checkValidity();
  button.disabled = validResult;
  button.classList.toggle(config.inactiveButtonClass, validResult);
}

function hideError(input, error) {
  error.textContent = '';
  input.classList.remove('popup__form-item_error');
}

function showError(input, error) {
  error.textContent = input.validationMessage;
  input.classList.add('popup__form-item_error');
}

function checkInputValidity(input, error) {
  if (input.validity.valid) {
    hideError(input, error);
  } else {
    showError(input, error);
    }
}

function handleFormInput(event, form, button, config) {
  const inputElement = event.target;
  const errorElement = document.querySelector(`.${inputElement.id}-error`);

  checkInputValidity(inputElement, errorElement);
  toggleButtonState(form, button, config);
}

function setEventListener(form, config) {
  const inputList = form.querySelectorAll(config.inputSelector);
  const button = form.querySelector(config.submitButtonSelector);
  Array.from(inputList).forEach((input) => {
    input.addEventListener('input', (event) => handleFormInput(event, form, button, config));
  });
}

function enableValidation (config) {
  const formList = document.querySelectorAll(config.formSelector);
  Array.from(formList).forEach((form) => {
    form.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
    setEventListener(form, config);
  });
}

enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__form-item',
  submitButtonSelector: '.popup__save-button',
  inactiveButtonClass: 'popup__save-button_disabled',
  inputErrorClass: 'popup__input-error',
  errorClass: 'popup__error_visible'
});