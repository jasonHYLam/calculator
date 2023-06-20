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
        populateDisplay(e.target.textContent);
        console.log(e.target.textContent);
    } )
})

// function to populate the display
function populateDisplay(input) {
    let display = document.querySelector("#display");
    display.textContent += input;
}

function getCurrentDisplayInput() {
    let displayInput = document.querySelector("#display");
    return displayInput.textContent;
    
}

function evaluateDisplay() {
    // convert from string to numbers
    // evaluate if input is a number
    const currentDisplayInput = getCurrentDisplayInput();
    const splitInput = currentDisplayInput.split("");
    console.log(splitInput)
    //obtain section of string before first operator
    let currentNumber = '';

    for (i in splitInput) {
        if (splitInput[i] == "+" || splitInput[i] == "-" || splitInput[i] == "*" || splitInput[i] == "/") break;
        currentNumber = currentNumber + splitInput[i];
        }

    console.log(currentNumber);
    // evaluate a pair of numbers
}

const equalButton = document.querySelector("#equal-button");

equalButton.addEventListener('click', evaluateDisplay);
equalButton.addEventListener('click', (e) => console.log(e.target));