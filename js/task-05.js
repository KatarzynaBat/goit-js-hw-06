const textInput = document.querySelector("#name-input")
const output = document.querySelector("#name-output")
textInput.addEventListener("input", (event) => {
    if (textInput !== undefined){
    output.textContent = event.currentTarget.value;}
   else {
    output.textContent = Anonynmous
    }
  });