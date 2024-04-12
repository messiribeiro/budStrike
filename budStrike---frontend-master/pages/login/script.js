const userInput = document.querySelector('#user-input')
const userInputContainer = document.querySelector(".user-container")

const form = document.querySelector(".login-form")
const user = document.querySelector("#user-input")
const password = document.querySelector("#password-input");

form.addEventListener("submit", (e) => {
    e.preventDefault()

    if(user.value != ""  && password.value != ""){
        window.location.href = "../home"
        
    }

    
})