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
    
    const currentDisplayInput = getCurrentDisplayInput();
    const splitInput = currentDisplayInput.split("");

    // convert from string to numbers
    function findNumberFromDisplayInput(splitInput) {
        let currentNumber = '';
        for (i in splitInput) {
            if (splitInput[i] == "+" || splitInput[i] == "-" || splitInput[i] == "*" || splitInput[i] == "/") break;
            currentNumber = currentNumber + splitInput[i];
            }
        // console.log(currentNumber, i);
        return currentNumber;
    }

    function findIndexOfCurrentNumber(splitInput) {
        for (i in splitInput) {
            if (splitInput[i] == "+" || splitInput[i] == "-" || splitInput[i] == "*" || splitInput[i] == "/") break;
            // currentNumber = currentNumber + splitInput[i];
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
    console.log('test the index');
    console.log(index)

    // delete current operator to find next number and operator.
    deleteFromDisplayInput(splitInput, index);
    console.log('test');
    console.log(splitInput)

    //obtain next number from the display input
    let nextNumber = Number(findNumberFromDisplayInput(splitInput)); //issue here
    index = findIndexOfCurrentNumber(splitInput);
    // console.log('test index');
    // obtain index of next number
    // console.log(index)

    console.log('test index');
    // delete index of next number
    deleteFromDisplayInput(splitInput, index);

    // console.log(firstNumber)
    // console.log(operator)
    // console.log(nextNumber)
    // let modifiedInput = deleteFromDisplayInput(splitInput, index);
    // console.log(modifiedInput)
    
    console.log('next split')
    console.log(splitInput);

    // set current output to the firstNumber variable
    let currentCalculationOutput = operate(firstNumber, operator, nextNumber);
    console.log(currentCalculationOutput);
    // set current output to first number
    firstNumber = currentCalculationOutput;
    // find next operator
    operator = findOperatorFromDisplayInput(splitInput);
    deleteFromDisplayInput(splitInput, index);

    nextNumber = Number(findNumberFromDisplayInput(splitInput));

    console.log('next set of values for next operation');
    console.log(firstNumber)
    console.log(operator)
    console.log(nextNumber)

    currentCalculationOutput = operate(firstNumber, operator, nextNumber);
    // find next number
    console.log(currentCalculationOutput);


}

const equalButton = document.querySelector("#equal-button");

equalButton.addEventListener('click', evaluateDisplay);
equalButton.addEventListener('click', (e) => console.log(e.target));