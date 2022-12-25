const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientsRef = document.querySelector('#ingredients');
const ingredientsItem = ingredients.map((element) => {
  const listItem = document.createElement('li');
  listItem.textContent = element;
  listItem.classList.add('item');

  return listItem;
});

ingredientsRef.prepend(...ingredientsItem);
