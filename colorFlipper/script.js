const bodyBackground = document.getElementById('bodyBackground');
const colorButton = document.getElementById('colorOpt');
const hexButton = document.getElementById('hexOpt');
const submitButton = document.getElementById('submitButton');
const userInput = document.getElementById('userInput');

let inputType = 'color';

colorButton.addEventListener('click', () => changeInputType('color'));
hexButton.addEventListener('click', () => changeInputType('hex'));

function changeInputType(type) {
    inputType = type;
    userInput.value = ''; // clear input field
    userInput.placeholder = type === 'color' ? 'Enter Color Name' : 'Enter Hex Code';
};

submitButton.addEventListener('click', changeBackground);

function changeBackground() {
    let colorValue = userInput.value;
    // Validate hex code if inputType is 'hex'
    if (inputType === 'hex' && !colorValue.match(/^#(?:[0-9a-fA-F]{3}){1,2}$/)) {
        alert('Please enter a valid hex code.');
        return;
    }
    bodyBackground.style.backgroundColor = colorValue;
};