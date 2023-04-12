const form =document.querySelector("form")
form.addEventListener("submit", event =>{
    event.preventDefault()
    if(form.elements.email.value ==="" || form.elements.password.value ==="" ) {
        alert("Uzupełnij wszystkie pola formularzy!")
    }
    else{
        const userDate = form.elements
        console.log(`User login:${userDate.email.value} 
        User password: ${userDate.password.value}`)
        event.currentTarget.reset()
    }
})