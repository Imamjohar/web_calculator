document.addEventListener('DOMContentLoaded', function() {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('.button');
    let currentInput = '0';
    let previousInput = '';
    let operator = '';

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            if (button.classList.contains('number')) {
                handleNumber(button.dataset.number);
            } else if (button.classList.contains('operator')) {
                handleOperator(button.dataset.operator);
            } else if (button.classList.contains('equals')) {
                handleEquals();
            } else if (button.classList.contains('clear')) {
                handleClear();
            }
        });
    });

    function handleNumber(number) {
        if (currentInput === '0') {
            currentInput = number;
        } else {
            currentInput = number;
        }
        updateDisplay();
    }

    function handleOperator(op) {
        if (operator && previousInput) {
            currentInput = calculate(previousInput, currentInput, operator);
        }
        operator = op;
        previousInput = currentInput;
        currentInput = op;
        updateDisplay();
    }

    function handleEquals() {
        if (operator && previousInput) {
            currentInput = calculate(previousInput, currentInput, operator);
            operator = '';
            previousInput = '';
            updateDisplay();
        }
    }

    function handleClear() {
        currentInput = '0';
        previousInput = '';
        operator = '';
        updateDisplay();
    }

    function calculate(a, b, op) {
        const num1 = parseFloat(a);
        const num2 = parseFloat(b);
        switch (op) {
            case '+':
                return (num1 + num2).toString();
            case '-':
                return (num1 - num2).toString();
            case '*':
                return (num1 * num2).toString();
            case '/':
                return (num1 / num2).toString();
            default:
                return b;
        }
    }

    function updateDisplay() {
        display.innerText = currentInput;
    }
});
