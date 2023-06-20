function add(a, b) {
    return a+b;
}

function subtract(a, b) {
    return a-b;
}

function multiply(a, b) {
    return a*b;
}

function divide(a, b) {
    return a/b;
}

let firstNumber = 0;
let operator; 
let secondNumber = 0;

// calls the above functions depending on value of operator.
function operate(firstNumber, operator, secondNumber) {
    switch (operator) {
        case '+':
            return add(firstNumber, secondNumber);
        case '-':
            return subtract(firstNumber, secondNumber);
        case '*':
            return multiply(firstNumber, secondNumber);
        case '/':
            return divide(firstNumber, secondNumber);
    }
}

const input= document.querySelectorAll(".input");

input.forEach(input=> {
    input.addEventListener('click', (e) => {
        populateDisplay(e.target.textContent)
    } )
})

// function to populate the display
function populateDisplay(input) {
    let display = document.querySelector("#display");
    display.textContent += input;
}