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

    function deleteFromDisplayInput(splitInput, index) {
        return splitInput.splice(0, index) //must be index+1; if index is 0, then the length of splice must be 1.
    }  

    function isOperatorExists(splitInput) {
        return (splitInput.includes("+") || splitInput.includes("-") ||splitInput.includes("*") ||splitInput.includes("/"));
    }
    

    const currentDisplayInput = getCurrentDisplayInput();
    const splitInput = currentDisplayInput.split("");

    console.log(`first array: ${splitInput}`);

 

    //obtain first number from display input
    let firstNumber = Number(findNumberFromDisplayInput(splitInput));
    let index = findIndexOfCurrentNumber(splitInput);
    console.log(`index of first number: ${index}`)
    deleteFromDisplayInput(splitInput, index);
    console.log(`after deleting first number: ${splitInput}`);

    let operator;
    let nextNumber = 0;

    // start loop here
    while (splitInput.length != 0) {
        console.log('does operator exist');
        console.log(isOperatorExists(splitInput));
        if (isOperatorExists(splitInput)) {
            operator = findOperatorFromDisplayInput(splitInput);
        }
        console.log(`operator: ${operator}`);
        index = findIndexOfCurrentOperator(splitInput);
        console.log(`operator index: ${index}`)
        deleteFromDisplayInput(splitInput, index);
        console.log(`after deleting operator: ${splitInput}`);

        nextNumber = Number(findNumberFromDisplayInput(splitInput));
        if (isOperatorExists(splitInput)) {
            index = findIndexOfCurrentNumber(splitInput);
        } else {index = Number(findIndexOfCurrentNumber(splitInput))+1} //not sure if this does anything
         console.log(`index of next number: ${index}`);
       
       
        deleteFromDisplayInput(splitInput, index);
        console.log(`after deleting next number: ${splitInput}`);

        // set current output to the firstNumber variable
        let currentCalculationOutput = operate(firstNumber, operator, nextNumber);
        console.log(`current calc output: ${currentCalculationOutput}`)

        // set current output to first number
        firstNumber = currentCalculationOutput;
        console.log(firstNumber)
    //     // find next operator
    //     operator = findOperatorFromDisplayInput(splitInput);
    //     // delete next operator
    //     deleteFromDisplayInput(splitInput, index);

    //     // find next number
    //     nextNumber = Number(findNumberFromDisplayInput(splitInput));
    //     console.log(nextNumber)
    // // index = findIndexOfCurrentNumber(splitInput);

    //     deleteFromDisplayInput(splitInput, index);

    //     currentCalculationOutput = operate(firstNumber, operator, nextNumber);

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

const equalButton = document.querySelector("#equal-button");

equalButton.addEventListener('click', evaluateDisplay);

const allClearButton = document.querySelector("#all-clear-button");
allClearButton.addEventListener('click', clearDisplay);

const backspaceButton = document.querySelector("#backspace-button");
backspaceButton.addEventListener('click', backspace);

// console.log('test display input');
// getCurrentDisplayInput();

// let testString = '7+8+9+10';
// let testArray = testString.split("");
// console.log(testArray);
// for (i in testArray) {
//     console.log(i);
// }