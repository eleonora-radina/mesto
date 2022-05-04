function toggleButtonState (form, config) {
  const button = form.querySelector(config.submitButtonSelector);
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

function handleFormInput(event, form, config) {
  const inputElement = event.target;
  const errorElement = document.querySelector(`.${inputElement.id}-error`);

  checkInputValidity(inputElement, errorElement);
  toggleButtonState(form, config);
}

function setEventListener(form, config) {
  const inputList = form.querySelectorAll(config.inputSelector);
  Array.from(inputList).forEach((input) => {
    input.addEventListener('input', (event) => handleFormInput(event, form, config));
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