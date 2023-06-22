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

// let firstNumber = 0;
// let operator; 
// let secondNumber = 0;

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

//disable operator button when a operator button is clicked. 
const operatorButtons = document.querySelectorAll(".operator");
operatorButtons.forEach(button => {
    button.addEventListener('click', () => {
        operatorButtons.forEach(button => button.disabled=true)
    });
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
        if (splitInput.length == 0) return 0;
        for (i in splitInput) {
            if (splitInput[i] == "+" || splitInput[i] == "-" || splitInput[i] == "*" || splitInput[i] == "/") break;
            }
        return Number(i); //testing index
    }

    function findOperatorFromDisplayInput(splitInput) {
            const operator = splitInput.find(char => char == "+" || char == "-" || char == "*" || char == "/" );
        return operator;
    }

    function findIndexOfCurrentOperator(splitInput) {
            const operator = splitInput.find(char => char == "+" || char == "-" || char == "*" || char == "/" );
        return Number(splitInput.indexOf(operator))+1; // testing the original index rather than index+0
    }

 
    // new numbers and operators are processed by deleting the previous numbers and operators
    function deleteFromDisplayInput(splitInput, index) {
        return splitInput.splice(0, index);
    }  

    function isOperatorExists(splitInput) {
        return (splitInput.includes("+") || splitInput.includes("-") ||splitInput.includes("*") ||splitInput.includes("/"));
    }
    

    const currentDisplayInput = getCurrentDisplayInput();
    const splitInput = currentDisplayInput.split("");


    // check if the input string ends with a number; if not, then return to cancel calculation.
    let lastChar = (splitInput.slice(-1)[0])
    if (!Number.isInteger(Number(lastChar))) return;




    //obtain first number from display input
    let firstNumber = Number(findNumberFromDisplayInput(splitInput));
    let index = findIndexOfCurrentNumber(splitInput);
    deleteFromDisplayInput(splitInput, index);



    let operator;
    let nextNumber = 0;

    // start loop here
    while (splitInput.length != 0) {
        if (isOperatorExists(splitInput)) {
            operator = findOperatorFromDisplayInput(splitInput);
        }
        index = findIndexOfCurrentOperator(splitInput);
        deleteFromDisplayInput(splitInput, index);

        nextNumber = Number(findNumberFromDisplayInput(splitInput));
        if (isOperatorExists(splitInput)) {
            index = findIndexOfCurrentNumber(splitInput);
        } else {index = Number(findIndexOfCurrentNumber(splitInput))+1} //deletes final string
        deleteFromDisplayInput(splitInput, index);

        // set current output to the firstNumber variable
        let currentCalculationOutput = operate(firstNumber, operator, nextNumber);
        firstNumber = currentCalculationOutput;

        populateDisplayWithCalculation(currentCalculationOutput)
    }
}

function clearDisplay() {
    const displayInput = document.querySelector("#display");
    displayInput.textContent = "";
}

function backspace() {
    const displayInput = document.querySelector("#display");
    displayInput.textContent = displayInput.textContent.slice(0, -1);
}

// check if the current text contains operator or ends with number
const displayInput = document.querySelector("#display")
// check for when display input text changes
displayInput.addEventListener('onchange', (e)=> {console.log(e.target)});

const equalButton = document.querySelector("#equal-button");

equalButton.addEventListener('click', evaluateDisplay);

const allClearButton = document.querySelector("#all-clear-button");
allClearButton.addEventListener('click', clearDisplay);

const backspaceButton = document.querySelector("#backspace-button");
backspaceButton.addEventListener('click', backspace);