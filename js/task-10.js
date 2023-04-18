function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
let boxes = document.querySelector("#boxes")

const create = document.querySelector("[data-create]")
const destroy = document.querySelector("[data-destroy]")
const amount = document.querySelector("input")


const  createBoxes = amount => {
  for (let i= 0; i < amount; i++) {
  const div = document.createElement("div")
  boxes.prepend(div)
  div.style.height = 30+ amount*10+ "px"
  div.style.width = 30+ amount*10+ "px"
  div.style.backgroundColor = getRandomHexColor()
  div.classList.add("a")
}}
create.addEventListener("click", () => createBoxes(amount.value)) 

 

   function deleteBoxes () {
   boxes.innerHTML =""
   }
   

destroy.addEventListener("click", deleteBoxes)
