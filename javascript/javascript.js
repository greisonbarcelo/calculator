function add (a, b) {
    return a + b;
}
function subtract (a, b) {
    return a - b;
}
function multiply (a, b) {
    return a * b;
}
function divide (a, b) {
    if (b === 0) {
        return 'Oops, you can\'t divide with 0!'
    } else
    return a / b;
}
function modulo (a, b) {
    return a % b;
}

let firstNumber;
let secondNumber;
let operator;
let allOperators = ['+', '-', '*', '/', '%'];
let display = document.querySelector(".display");
let isEnteringSecondNumber = false; // Added flag to track if entering the second number

function operate(a, b, operator) {
    if (operator === '+') {
        return add(a, b);
    } else if (operator === '-') {
        return subtract(a, b);
    } else if (operator === '*') {
        return multiply(a, b);
    } else if (operator === '/') {
        return divide(a, b);
    } else if (operator === '%'){
        return modulo(a, b);
    } else return 'Error'
}
// console.log(operate(2, 2, operator));



let button = document.querySelectorAll(".item");

button.forEach(button => {
    button.addEventListener('click', () => {

        if (!isNaN(button.textContent)) {
            if (display.textContent === '0' || (isEnteringSecondNumber && secondNumber === '')) { // Check if entering second number
                display.textContent = getNumber(button); // Replace '0' with the new number
                if (isEnteringSecondNumber) {
                    secondNumber = display.textContent; // Set second number
                } else {
                    firstNumber = display.textContent; // Set first number
                }
            } else {
                display.textContent += getNumber(button); // Append new number
                if (isEnteringSecondNumber) {
                    secondNumber += getNumber(button); // Append to second number
                } else {
                    firstNumber += getNumber(button); // Append to first number
                }
            }
        } else if (button.textContent.includes('.')) {
            // Handle . button click
            decimal(button);
        } else if (button.textContent.includes('AC')) {
            // Handle AC button click
            display.textContent = '0';
            firstNumber = '';
            secondNumber = '';
            isEnteringSecondNumber = false; // Reset flag
        } else if (button.textContent.includes('+/-')) {
            // Handle +/- button click
            positiveNegative(button);
        } else if (allOperators.includes(button.textContent)) {
            operator = button.textContent;
            isEnteringSecondNumber = true; // Set flag to true when an operator is clicked
            display.textContent = '0';
            // console.log(`Operator set to: ${operator}`);
            // console.log(`First number set to: ${firstNumber}`);
        } else if (button.textContent.includes('=')) {
            // Handle = button click
            firstNumber = parseFloat(firstNumber); // Convert first number to float
            secondNumber = parseFloat(secondNumber); // Convert second number to float
            console.log(operate(firstNumber, secondNumber, operator));
            display.textContent = operate(firstNumber, secondNumber, operator);
            isEnteringSecondNumber = false; // Reset flag after operation

            firstNumber = operate(firstNumber, secondNumber, operator);
        }
        // console.log(display.textContent);
        console.log(`Operator: ${operator}`);
        console.log(`First number: ${firstNumber}`);
        console.log(`Second number: ${secondNumber}`);
    });
});

function getNumber(button) {
        return button.textContent;
}
function decimal(button) {
    if (!display.textContent.includes('.')) {
        return display.textContent += '.';
    }
}
function positiveNegative(button) {
    if (display.textContent >= 0) {
        return display.textContent *= -1;
    } else if (display.textContent < 0) {
        return display.textContent *= -1;
    }
}




























