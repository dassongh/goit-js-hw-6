const buttonRef = document.querySelector('.change-color');
const bodyRef = document.querySelector('body');
const spanRef = document.querySelector('.color');
 
buttonRef.addEventListener('click', changeColor);

function changeColor() {
  bodyRef.style.backgroundColor = getRandomHexColor();
  spanRef.textContent = bodyRef.style.backgroundColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}