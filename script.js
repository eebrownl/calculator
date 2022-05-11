const numberButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');
const allClearButton = document.querySelector('.all-clear');
const clearButton = document.querySelector('.clear');
const equalsButton = document.querySelector('.equals');
const display = document.querySelector('.display');

for(let i = 0; i < numberButtons.length; i++) {
    numberButtons[i].addEventListener('click', e => {
        const key = e.target;
        const keyValue = key.textContent;
        const displayValue = display.textContent;

        if (parseInt(displayValue) === 0) {
            display.textContent = keyValue;
        } else {
            display.textContent = displayValue + keyValue
        }
    }) 
}

for(let i = 0; i < operatorButtons.length; i++) {
    operatorButtons[i].addEventListener('click', e => {
        const key = e.target;
        const keyValue = key.textContent
    }) 
}

allClearButton.addEventListener('click', e => {
    const allClearKey = e.target;
    display.textContent = '0';
})

clearButton.addEventListener('click', e => {
    const clearKey = e.target;
    const displayValue = display.textContent;
    let newDisplayValue = displayValue.slice(0, -1);
    display.textContent = newDisplayValue;
})
equalsButton.addEventListener('click', test)

function test() {
    console.log('working')
}