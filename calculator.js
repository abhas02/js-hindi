const resultElement = document.getElementById('result');
const clearBtn = document.getElementById('clear-button');
const deleteBtn = document.getElementById('delete-button');
const divideBtn = document.getElementById('divide-button');
const multiplyBtn = document.getElementById('multiply-button');
const subtractBtn = document.getElementById('subtract-button');
const addBtn = document.getElementById('add-button');
const decimalBtn = document.getElementById('decimal-button');
const equalBtn = document.getElementById('equal-button');
const numberBtns = document.querySelectorAll('.number');

// Initialize variables
let result = '';
let operation = '';
let previousOperand = '';

// Function to append number
const appendNumber = (number) => {
    if (number === '.' && result.includes('.')) return;
    result += number;
    updateDisplay();
};

// Function to update display
const updateDisplay = () => {
    if (operation) {
        resultElement.innerText = `${previousOperand} ${operation} ${result}`;
    } else {
        resultElement.innerText = result;
    }
};

// Function to select operator
const selectOperator = (operatorValue) => {
    if (result === '') return;

    if (operation !== '' && previousOperand !== '') {
        calculateResult();
    }
    operation = operatorValue;
    previousOperand = result;
    result = '';
    updateDisplay();
};

// Function to calculate result
const calculateResult = () => {
    let evaluatedResult;
    const prev = parseFloat(previousOperand);
    const current = parseFloat(result);
    if (isNaN(prev) || isNaN(current)) return;

    switch (operation) {
        case '+':
            evaluatedResult = prev + current;
            break;
        case '-':
            evaluatedResult = prev - current;
            break;
        case '*':
            evaluatedResult = prev * current;
            break;
        case '/':
            evaluatedResult = prev / current;
            break;
        default:
            return;
    }

    result = evaluatedResult.toString();
    operation = '';
    previousOperand = '';
    updateDisplay();
};

// Add event listener to number buttons
numberBtns.forEach(button => {
    button.addEventListener('click', () => {
        appendNumber(button.innerText);
    });
});

decimalBtn.addEventListener('click', () => appendNumber('.'));
addBtn.addEventListener('click', () => selectOperator('+'));
subtractBtn.addEventListener('click', () => selectOperator('-'));
multiplyBtn.addEventListener('click', () => selectOperator('*'));
divideBtn.addEventListener('click', () => selectOperator('/'));
equalBtn.addEventListener('click', () => {
    if (result === '') return;
    calculateResult();
});

// Clear button
clearBtn.addEventListener('click', () => {
    result = '';
    operation = '';
    previousOperand = '';
    updateDisplay();
});

// Delete button (backspace)
deleteBtn.addEventListener('click', () => {
    result = result.slice(0, -1);
    updateDisplay();
});
