const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const list = document.querySelector("ul")


for (const i of ingredients){
  const liElement = document.createElement("li")
  liElement.textContent = i
  liElement.classList.add("item")
  list.append(liElement)
  
}