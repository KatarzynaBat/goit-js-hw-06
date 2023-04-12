const input = document.querySelector("#validation-input")

input.addEventListener("blur", () => {
    if (input.value.length === 6) {
        input.classList.add("valid")
        input.classList.toggle("invalid")
    }
        else {
            input.classList.add("invalid")
            input.classList.toggle("valid")
        }
    }
)