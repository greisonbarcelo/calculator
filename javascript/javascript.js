let firstNum, secondNum, operator;
firstNum = 1;
operator = '+'
secondNum = 2;

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

console.log(operate(operator, firstNum, secondNum));
