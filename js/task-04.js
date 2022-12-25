const decrBtnRef = document.querySelector('[data-action="decrement"]');
const incrBtnRef = document.querySelector('[data-action="increment"]');
const counterValueRef = document.querySelector('#value');
const counterValue = {
    value: 0,
    decreaceCounter() {
        this.value -= 1;
    },
    increaceCounter() {
        this.value += 1;
    },

};

decrBtnRef.addEventListener('click', () => {
    counterValue.decreaceCounter();
    counterValueRef.textContent = counterValue.value;
});

incrBtnRef.addEventListener('click', () => {
    counterValue.increaceCounter();
    counterValueRef.textContent = counterValue.value;
});