function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const createBtnRef = document.querySelector('[data-create]');
const destroyBtnRef = document.querySelector('[data-destroy]');
const divBoxesRef = document.querySelector('#boxes');
const controlInputRef = document.querySelector('#controls input');


function createBoxes(amount) {
  amount = controlInputRef.value;

  let numberedSize = 20;
  let markupArr = [];

  for (let i = 0; i < amount; i += 1) {
    const currentColor = getRandomHexColor();
  
    numberedSize += 10;
    const boxSize = numberedSize + 'px';
    const boxMarkup = `<div style ='width: ${boxSize}; height: ${boxSize}; background-color: ${currentColor}'></div>`;
    // console.log(boxMarkup)
    markupArr.push(boxMarkup);
  };

  const murkup = markupArr.join('');
  // console.log(murkup);

  divBoxesRef.insertAdjacentHTML('afterbegin', murkup);

};

function destroyBoxes() {
  divBoxesRef.innerHTML = '';
};

destroyBtnRef.addEventListener('click', destroyBoxes);

createBtnRef.addEventListener('click', createBoxes);



