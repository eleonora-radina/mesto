
function enableValidation (selector) {
    const form = document.querySelector(selector.formSelector);
    form.addEventListener('submit', (event) => handleFormSubmit(event, form));
    form.addEventListener('input', (event) => handleFormInput(event, form));
}

function handleFormSubmit(event, form) {
    event.preventDefault();
}

function handleFormInput(event) {
    const inputElement = event.target;
    const errorElement = document.querySelector(`.${inputElement.id}-error`);

    if (inputElement.validity.valid) {
        errorElement.textContent = '';
    } else {
        errorElement.textContent = inputElement.validationMessage;
    }
}

enableValidation({
    formSelector: '.popup__form',
    inputSelector: '.popup__form-item',
    submitButtonSelector: '.popup__save-button',
    inactiveButtonClass: 'popup__save-button_disabled',
    inputErrorClass: 'popup__input-error',
    errorClass: 'popup__error_visible'
  }); 