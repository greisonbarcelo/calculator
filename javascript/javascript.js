let display = document.querySelector("#display h2");
// console.log(display.textContent);

let displayValue = 0;
display.textContent = displayValue;

let buttonTest = document.querySelectorAll("button");
// console.log(buttonTest);

let firstNumber;

function getFirstNumber(button) {
    for(let i = 0; i <= 9; i++) {
        if (button.textContent.includes(i)) {
            return i;
        }
    }
}
buttonTest.forEach(button => {
    button.addEventListener('click', () => {
        if (display.textContent === '0') {
            display.textContent = getFirstNumber(button); // Replace '0' with the new number
        } else {
            display.textContent += getFirstNumber(button); // Append new number
        }

        displayValue = display.textContent;
        firstNumber = displayValue;
        console.log(`dv = ${displayValue}`);
        console.log(`first NUMBER ${displayValue}`)

    });
});





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
