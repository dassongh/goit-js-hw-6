const refs = {
  boxes: document.querySelector('#boxes'),
  input: document.querySelector('input'),
  renderButton: document.querySelector('[data-create]'),
  destroyButton: document.querySelector('[data-destroy]'),
}; 

const createBoxes = amount => {
  const newBoxes = [];
  let boxWidthAndHeight = 30;
  
  for (let i = 0; i < amount; i += 1) {
    const box = document.createElement('div');
    box.style.width = `${boxWidthAndHeight}px`;
    box.style.height = `${boxWidthAndHeight}px`;
    box.style.backgroundColor = getRandomHexColor();
    box.style.borderRadius = '5%';
    box.style.marginRight = '5px';
    boxWidthAndHeight += 10;
    newBoxes.push(box);
  }
  
  refs.boxes.append(...newBoxes);
};

refs.renderButton.addEventListener('click', () => {
  createBoxes(refs.input.value);
});

refs.destroyButton.addEventListener('click', () => {
  refs.boxes.innerHTML = '';
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}