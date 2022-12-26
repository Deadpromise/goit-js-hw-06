function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const butRef = document.querySelector('.change-color');
const textRef = document.querySelector('.color');


butRef.addEventListener('click', changeColor);

function changeColor() {
  const currentColor = getRandomHexColor();
  document.body.style.backgroundColor = currentColor;
  textRef.textContent = currentColor;
};

