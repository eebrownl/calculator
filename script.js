const container = document.querySelector('.container')
const keys = container.querySelector('.keys')
const display = container.querySelector('.display')

const calculate = (n1, operator, n2) => {
    let result = '';
    if (operator==='add') {
        result = parseFloat(n1) + parseFloat(n2);
    } else if (operator==='subtract') {
        result = parseFloat(n1) - parseFloat(n2);
    } else if (operator==='multiply') {
        result = parseFloat(n1) * parseFloat(n2);
    } else if (operator==='divide') {
        result = parseFloat(n1) / parseFloat(n2);
    } return result
}


keys.addEventListener('click', e => {
    const key = e.target
    const keyValue = key.textContent
    const displayValue = display.textContent
    const action = key.dataset.action
    let previousKeyType = keys.dataset.previousKeyType

    if (action ==='add' ||
        action ==='subtract' ||
        action ==='multiply' ||
        action ==='divide') {
            keys.dataset.previousKeyType = 'operator';
            container.dataset.firstValue = displayValue;
            container.dataset.operator = action
        }

    if (!action) {
        keys.dataset.previousKeyType = 'number';

        if (displayValue ==='0' || previousKeyType ==='operator') {
            display.textContent = keyValue
        } else {
            display.textContent = displayValue + keyValue
        }
    }

    if (action ==='clear') {
        display.textContent = displayValue.slice(0, -1)
    }

    if (action ==='all-clear') {
        display.textContent = ''
    }

    //Need to fix for when a decimal starts the secondValue
    if (action==='decimal') {
        keys.dataset.previousKeyType = 'decimal'
    }
    if (action ==='decimal' && previousKeyType !=='operator') {
        display.textContent = displayValue + '.'
    } else if (action ==='decimal' && previousKeyType ==='operator') {
        display.textContent = keyValue
    }

    if (action ==='equals') {
        const secondValue = displayValue;
        const operator = container.dataset.operator;
        const firstValue = container.dataset.firstValue

        display.textContent = calculate(firstValue, operator, secondValue)

    }
})