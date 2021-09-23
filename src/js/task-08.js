const formRef = document.querySelector('.login-form');

formRef.addEventListener('submit', formSubmitHandler);

function formSubmitHandler(e) {
  e.preventDefault();

  const { elements: { email, password } } = e.currentTarget;

  if (email.value === '' || password.value === '') return console.log('Please, fill in all the fields');

  console.log(`E-mail: ${email.value}; Password: ${password.value}.`);
  
  e.currentTarget.reset();
} 
