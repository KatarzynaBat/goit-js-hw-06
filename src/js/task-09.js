function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const body = document.querySelector("body")
const colorWeb = document.querySelector("button")
function setColor() {
  body.style.backgroundColor = getRandomHexColor()
} 

colorWeb.addEventListener("click", setColor)