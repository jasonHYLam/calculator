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
        // console.log(e.target.textContent);
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

    findNumberFromDisplayInput(splitInput);

    //obtain section of string before first operator
    function findNumberFromDisplayInput(splitInput) {
        let currentNumber = '';
        for (i in splitInput) {
            if (splitInput[i] == "+" || splitInput[i] == "-" || splitInput[i] == "*" || splitInput[i] == "/") break;
            currentNumber = currentNumber + splitInput[i];
            }
        // console.log(currentNumber, i);
        return [currentNumber, i];
    }

    function findOperatorFromDisplayInput(splitInput) {
            const operator = splitInput.find(char => char == "+" || char == "-" || char == "*" || char == "/" );
        return [operator, splitInput.indexOf(operator)]
    }

    // console.log(findOperatorFromDisplayInput(splitInput));
    // evaluate a pair of numbers using function operate()

    function deleteFromDisplayInput(splitInput, index) {
        console.log(splitInput.splice(0, index))
        return splitInput.splice(0, index)
    }

    let [currentNumber, index] = findNumberFromDisplayInput(splitInput);
    console.log('test');
    console.log(index);
    console.log(deleteFromDisplayInput(splitInput, index))
    // let modifiedInput = deleteFromDisplayInput(splitInput, index);
    // console.log(modifiedInput)
    


    operate()
}

const equalButton = document.querySelector("#equal-button");

equalButton.addEventListener('click', evaluateDisplay);
equalButton.addEventListener('click', (e) => console.log(e.target));