const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsRef = document.querySelector('#ingredients');

const liRefs = ingredients.map(elem => {
  const ingredient = document.createElement('li');
  ingredient.textContent = elem;
  ingredient.classList.add('item');

  return ingredient;
});

ingredientsRef.append(...liRefs);