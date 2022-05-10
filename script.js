const numberButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');
const allClearButton = document.querySelector('.all-clear');
const clearButton = document.querySelector('.clear');
const equalsButton = document.querySelector('.equals');
const firstOperand = document.querySelector('.first-operand');
const secondOperand = document.querySelector('.second-operand');

numberButtons.forEach(button => {
    button.addEventListener('click', () => console.log('working'))
})

operatorButtons.forEach(button => {
    button.addEventListener('click', () => console.log('working'))
})

allClearButton.addEventListener('click', test);
clearButton.addEventListener('click', test);
equalsButton.addEventListener('click', test);

function test() {
    console.log('working')
}