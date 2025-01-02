let currentInput = '';  
let previousInput = ''; 
let operator = null;    

const display = document.getElementById('display');
const buttons = document.querySelectorAll('.button');

// Add event listeners to all buttons
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        const value = button.innerText;

        if (!isNaN(value) || value === '.') {
            currentInput += value;
            updateDisplay(currentInput);
        } else if (value === 'AC') {
            
            currentInput = '';
            previousInput = '';
            operator = null;
            updateDisplay('');
        } else if (['+', '-', '*', '/'].includes(value)) {
            if (currentInput) {
                previousInput = currentInput;
                currentInput = '';
                operator = value;
            }
        } else if (value === '=') {
            if (currentInput && previousInput && operator) {
                const result = operate(operator, parseFloat(previousInput), parseFloat(currentInput));
                updateDisplay(result);
                currentInput = result.toString();
                previousInput = '';
                operator = null;
            }
        }
    });
});

// update the display
function updateDisplay(value) {
    display.innerText = value;
}

//  operations
const add = (num1, num2) => num1 + num2;
const subtract = (num1, num2) => num1 - num2;
const multiply = (num1, num2) => num1 * num2;
const divide = (num1, num2) => (num2 !== 0 ? num1 / num2 : 'Error');

//  handle operations
function operate(operator, numOne, numTwo) {
    switch (operator) {
        case '+':
            return add(numOne, numTwo);
        case '-':
            return subtract(numOne, numTwo);
        case '*':
            return multiply(numOne, numTwo);
        case '/':
            return divide(numOne, numTwo);
        default:
            return null;
    }
}

