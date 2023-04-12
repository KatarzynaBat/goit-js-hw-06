const input = document.querySelector("#font-size-control")
const span = document.querySelector("#text")

function setFont(){
   
    span.style.fontSize = `${input.value}px `
}

input.addEventListener("input", setFont)

   