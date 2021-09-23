const valueRef = document.querySelector('#value');
const decrementButtonRef = valueRef.previousElementSibling;
const incrementButtonRef = valueRef.nextElementSibling;

let counterValue = 0;

decrementButtonRef.addEventListener('click', () => {
  counterValue -= 1;
  valueRef.textContent = counterValue;
});

incrementButtonRef.addEventListener('click', () => {
  counterValue += 1;
  valueRef.textContent = counterValue;
});