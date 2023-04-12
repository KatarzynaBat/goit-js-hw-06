let counterValue = 0

const valueSpan = document.querySelector("#value")

const decrementButton = document.querySelector('button[data-action="decrement"]')

const incrementButton = document.querySelector('button[data-action="increment"]')

const decrease = () =>{
    counterValue = counterValue -1
    valueSpan.textContent = counterValue
}

const increase = () =>{
    counterValue = counterValue +1
    valueSpan.textContent = counterValue
}
decrementButton.addEventListener("click",decrease)

incrementButton.addEventListener("click",increase)