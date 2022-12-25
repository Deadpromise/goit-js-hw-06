const ulCategories = document.querySelector('#categories');
const itemsInCategories = ulCategories.querySelectorAll('.item');
console.log('Number of categories:', itemsInCategories.length);
const itemInCategories = itemsInCategories.forEach((item) => {

    const itemHeader = item.querySelector('h2').textContent;
    console.log('Category:', itemHeader);
    const numberOfElements = item.querySelectorAll('li');
    console.log('Elements:', numberOfElements.length);
});
