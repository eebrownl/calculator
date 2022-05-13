const container = document.querySelector('.container')
const keys = container.querySelector('.keys')
const display = container.querySelector('.display')

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
        }

    if (!action) {
        keys.dataset.previousKeyType = 'number';

        if (displayValue ==='0' || previousKeyType ==='operator') {
            display.textContent = keyValue
        } else {
            display.textContent = displayValue + keyValue
        }
    }
})