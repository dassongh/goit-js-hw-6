const inputRef = document.querySelector('#validation-input');

const onInputBlur = (e) => {
  if (parseInt(e.currentTarget.dataset.length) === parseInt(e.currentTarget.value.length)) {
    e.currentTarget.classList.add('valid');
    e.currentTarget.classList.remove('invalid');
  } else {
    e.currentTarget.classList.add('invalid');
    e.currentTarget.classList.remove('valid');
  }
};

inputRef.addEventListener('blur', onInputBlur);