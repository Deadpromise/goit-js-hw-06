const inputRef = document.querySelector('#name-input');
const outputRef = document.querySelector('#name-output');

inputRef.addEventListener('input', (e) => {
    outputRef.textContent = e.currentTarget.value;
    if (e.currentTarget.value === '') {
        outputRef.textContent = 'Anonymous';
    };
});