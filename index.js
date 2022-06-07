const display = document.querySelector(".display");

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

function operate(operator, a, b) {
    return (operator(a, b));
}
// pretty sure it's .digit
const numberButtons = document.querySelectorAll(".digit");

numberButtons.forEach(e => {
    e.addEventListener("click", function() {
        populateDisplay(e.innerText);
        displayText = e.innerText;
    });
});

function myFunction() {
    alert("why hello");
}

function populateDisplay(displayText) {
    display.innerText = displayText;
}

console.log("answer is: "+ operate(divide, 8, 8));
