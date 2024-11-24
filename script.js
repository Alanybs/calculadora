
const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');

let currentInput = '';

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;

        if (value === 'C') {
            currentInput = '';
        } else if (value === 'CE') {
            currentInput = currentInput.slice(0, -1);
        } else if (value === '.' && !currentInput.includes('.')) {
            currentInput += value;
        } else if (value === '=') {
            try {
                currentInput = eval(currentInput.replace('x', '*'));
            } catch {
                currentInput = 'Error';
            }
        } else {
            currentInput += value;
        }

        display.textContent = currentInput || '0';
    });
});
