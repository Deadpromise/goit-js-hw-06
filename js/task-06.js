const validationInputref = document.querySelector('#validation-input');

function isValid() {
    validationInputref.classList.add('invalid');
    if (Number(validationInputref.dataset.length) === validationInputref.value.length) {
        validationInputref.classList.replace('invalid', 'valid');
    };
};

validationInputref.addEventListener('blur', isValid);