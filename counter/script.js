// Initialize counter and increment values
let counter = 0;
let increment = 1;

// DOM elements
const display = document.getElementById('counterDisplay');
const subtractBtn = document.getElementById('subtractBtn');
const addBtn = document.getElementById('addBtn');
const resetBtn = document.getElementById('resetBtn');
const incrementUpdateBtn = document.getElementById('incrementUpdate');
const userInput = document.getElementById('userInput');

// Update display function
function updateDisplay() {
    display.textContent = counter;
    // Update button labels to reflect the current increment
    addBtn.textContent = `+${increment}`;
    subtractBtn.textContent = `-${increment}`;
}

// Add button functionality
addBtn.addEventListener('click', () => {
    counter += increment;
    updateDisplay();
});

// Subtract button functionality
subtractBtn.addEventListener('click', () => {
    counter -= increment;
    updateDisplay();
});

// Reset button functionality
resetBtn.addEventListener('click', () => {
    counter = 0;
    increment = 1; // Reset increment to default
    userInput.value = '';
    updateDisplay();
});

// Increment update functionality
incrementUpdateBtn.addEventListener('click', () => {
    const userIncrement = parseInt(userInput.value, 10);
    if (!isNaN(userIncrement) && userIncrement > 0) {
        increment = userIncrement;
        updateDisplay();
    } else {
        alert('Please enter a valid positive number for the increment.');
    }
});

// Initial display update
updateDisplay();
