const categories = document.querySelector('#categories');
console.log(`Number of categories ${categories.childElementCount}`);
const item = document.querySelectorAll('.item');
let categoriesName = '';
let categoriesElementCount = 0;
item.forEach(elem => {
  categoriesName = elem.querySelector('h2').textContent;
  console.log(`Category: ${categoriesName}`);
  categoriesElementCount = elem.querySelector('ul').childElementCount;
  console.log(`Elements: ${categoriesElementCount}`);
});