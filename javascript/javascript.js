let display = document.querySelector("#display h2");
// console.log(display.textContent);

let displayValue = 0;
display.textContent = displayValue;

let buttonTest = document.querySelectorAll("button");
// console.log(buttonTest);

let firstNumber = null;
let secondNumber = null;
let operator = null;

function getFirstNumber(button) {
    for(let i = 0; i <= 9; i++) {
        if (button.textContent.includes(i)) {
            return i;
        }
    }
}
buttonTest.forEach(button => {
    button.addEventListener('click', () => {
        const buttonContent = button.textContent;

        if (!isNaN(buttonContent)) { // If the button is a number
            if (display.textContent === '0') {
                display.textContent = getFirstNumber(button); // Replace '0' with the new number
            } else {
                display.textContent += getFirstNumber(button); // Append new number
            }

            displayValue = display.textContent;
            console.log(`dv = ${displayValue}`);
        } else if (["+", "-", "*", "/"].includes(buttonContent)) { // If the button is an operator
            firstNumber = parseFloat(display.textContent); // Save the current number as firstNumber
            operator = buttonContent; // Save the operator
            displayValue = 0; // Reset display for new input
            console.log(`First Number: ${firstNumber}, Operator: ${operator}`);
        }
    });
});


// console.log(`first NUMBER ${firstNumber}`)



// let firstNum, secondNum, operator;
// firstNum = 1;
// operator = '+'
// secondNum = 2;

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

function operate(operator, fNum, sNum) {
    if(operator === '+') {
        return add(fNum, sNum);
    } else if(operator === '-') {
        return subtract(fNum, sNum);
    } else if(operator === '*') {
        return multiply(fNum, sNum);
    } else if(operator === '/') {
        return divide(fNum, sNum);
    } else return 'ERR'
}

// console.log(operate(operator, firstNum, secondNum));
