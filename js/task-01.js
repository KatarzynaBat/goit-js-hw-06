const liItems = document.querySelectorAll("li.item")
console.log(`Number of categories: ${liItems.length}`)

for (const element of liItems) {
    console.log(`Category: ${element.children[0].innerText}`);
  
    console.log(`Elements: ${element.children[1].children.length}`);
  }




