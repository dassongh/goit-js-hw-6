const categoriesRef = document.querySelector('#categories');
const itemRefs = document.querySelectorAll('.item');

const calculateCategories = categories => `There are ${categories.childElementCount} categories`;
const consoleInfo = items => {
  items.forEach(item => {
    console.log(`Category: ${item.firstElementChild.textContent}`);
    console.log(`Elements: ${item.lastElementChild.childElementCount}`);
  });
}; 

console.log(calculateCategories(categoriesRef));
consoleInfo(itemRefs);
