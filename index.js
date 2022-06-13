let display = document.querySelector(".display");
const numberButtons = document.querySelectorAll(".digit");
const operatorButtons = document.querySelectorAll(".operator");
const equalsButton = document.querySelector(".equals-button");

let joinedDigits = 0;
let chosenNumber = "a";
let chosenOperator = function() {};
let answer = 0;

let digitArray = [];
let numbersArray = [];
let operatorArray = [];


function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function populateDisplay(displayText) {
    display.innerText += (displayText);
}

numberButtons.forEach(e => {
    const number = Number(e.innerText);
    e.addEventListener("click", function() {
        populateDisplay(number);
        digitArray.push(number);
        operatorButtons.forEach(e => e.disabled = false);
    });
});

operatorButtons.forEach(e => {
    e.addEventListener("click", function() {

        populateDisplay(e.innerText);
        fuseDigits();
        pushToNumberArray(joinedDigits);


        operate(chosenOperator, numbersArray);

        changeOperator(e);

        operatorArray.push(chosenOperator);
        digitArray = [];
        
        operatorButtons.forEach(e => e.disabled = true);
    });
})

// equalsButton.addEventListener("click", function() {
//     clearDisplay();
//     display.innerText = "Result: " + operate(chosenOperator, digitArray);
//     popOperatorArray();
// });



function changeOperator(button) {
    const operator = button.innerText;
    switch(operator) {
        case "+":
            chosenOperator = add;
            break;
        case "-":
            chosenOperator = subtract;
            break;
        case "*":
            chosenOperator = multiply;
            break;
        case "/":
            chosenOperator = divide;
        console.log(chosenOperator);
    }
}


function operate(currentOperator, numbersArray) {
    if (numbersArray.length < 2) {
        return;
    } 
    const output = numbersArray.reduce(currentOperator);
    popFromNumberArray();
    console.log("current output is: " + output);
    pushToNumberArray(output);
    return output;
}

function clearDisplay() {
    display.innerText = "Result: ";
}

function popOperatorArray() {
    operatorArray.shift();
}

function fuseDigits() {
        joinedDigits = Number(digitArray.toString().split(",").join(""));
    }

function pushToNumberArray(number) {
    numbersArray.push(number);
}

function popFromNumberArray() {
    numbersArray.splice(0, 2);
}
