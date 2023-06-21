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
        populateDisplayWithInput(e.target.textContent);
        // console.log(e.target.textContent);
    } )
})

// function to populate the display
function populateDisplayWithInput(input) {
    let display = document.querySelector("#display");
    display.textContent += input;
}

function populateDisplayWithCalculation(calculation) {
    let display = document.querySelector("#display");
    display.textContent = calculation;
}

function getCurrentDisplayInput() {
    let displayInput = document.querySelector("#display");
    return displayInput.textContent;
    
}

function evaluateDisplay() {
    
    const currentDisplayInput = getCurrentDisplayInput();
    const splitInput = currentDisplayInput.split("");

    // convert from string to numbers
    function findNumberFromDisplayInput(splitInput) {
        let currentNumber = '';
        for (i in splitInput) {
            if (splitInput[i] == "+" || splitInput[i] == "-" || splitInput[i] == "*" || splitInput[i] == "/") break;
            currentNumber = currentNumber + splitInput[i];
            }
        return currentNumber;
    }

    function findIndexOfCurrentNumber(splitInput) {
        for (i in splitInput) {
            if (splitInput[i] == "+" || splitInput[i] == "-" || splitInput[i] == "*" || splitInput[i] == "/") break;
            }
            return i;
    }

    function findOperatorFromDisplayInput(splitInput) {
            const operator = splitInput.find(char => char == "+" || char == "-" || char == "*" || char == "/" );
        return operator;
    }

    function findIndexOfCurrentOperator(splitInput) {
            const operator = splitInput.find(char => char == "+" || char == "-" || char == "*" || char == "/" );
        return splitInput.indexOf(operator)+1;
    }

    function deleteFromDisplayInput(splitInput, index) {
        return splitInput.splice(0, index)
    }

    //obtain first number from display input
    let firstNumber = Number(findNumberFromDisplayInput(splitInput));
    let operator = findOperatorFromDisplayInput(splitInput);
    let index = findIndexOfCurrentOperator(splitInput);

    // delete current operator to find next number and operator.
    deleteFromDisplayInput(splitInput, index);

    //obtain next number from the display input
    let nextNumber = Number(findNumberFromDisplayInput(splitInput));
    index = findIndexOfCurrentNumber(splitInput);

    // delete index of next number
    deleteFromDisplayInput(splitInput, index);


    // start loop here
    while (splitInput.length != 0) {
        // set current output to the firstNumber variable
        let currentCalculationOutput = operate(firstNumber, operator, nextNumber);
        console.log(currentCalculationOutput);

        // set current output to first number
        firstNumber = currentCalculationOutput;
        // find next operator
        operator = findOperatorFromDisplayInput(splitInput);
        // delete next operator
        deleteFromDisplayInput(splitInput, index);

        // find next number
        nextNumber = Number(findNumberFromDisplayInput(splitInput));
        deleteFromDisplayInput(splitInput, index);

        currentCalculationOutput = operate(firstNumber, operator, nextNumber);

        // console.log(currentCalculationOutput);
        // console.log(splitInput);
        populateDisplayWithCalculation(currentCalculationOutput)
    }
}

const equalButton = document.querySelector("#equal-button");

equalButton.addEventListener('click', evaluateDisplay);
equalButton.addEventListener('click', (e) => console.log(e.target));