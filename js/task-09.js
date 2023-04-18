function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const span = document.querySelector(".color")
const body = document.querySelector("body")
const colorWeb = document.querySelector("button")
function setColor() {
  body.style.backgroundColor = getRandomHexColor()
span.innerHTML =getRandomHexColor()
} 

colorWeb.addEventListener("click", setColor)