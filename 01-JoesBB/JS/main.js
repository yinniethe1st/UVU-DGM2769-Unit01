// document.getElementById('company').innerHTML = "Joe's Bed and Breakfast"
document.querySelector('#company').innerText = "Joe's Bed and Breakfast"
document.querySelector('header > h2').innerText ="Best B&B this side of Veral"

let userName = prompt("What is your name?")

// let message = "Hello " + userName + ", Welcome to the best lodging in Utah"

let message = `Hello ${userName}, welcome to the finest lodging in Utah`

document.querySelector('#greeting').innerText = message

