document.getElementById('submitButton').addEventListener('click', function() {
    // Get user input
    const userInput = document.getElementById('userInput').value;
    // Split user input into an array
    const numbersArray = userInput.split(',').map(function(number) {
        return parseFloat(number.trim());
    });
    // check if user input is a usable number
    const validNumbers = numbersArray.filter(function(number) {
        return !isNaN(number);
    });
    // find the average of the user input numbers
    const sum = validNumbers.reduce(function(accumulator, currentValue) {
        return accumulator + currentValue;
    }, 0);
    const average = sum / validNumbers.length;
    // display the average
    document.getElementById('avgDisplay').textContent = isNaN(average) ? " Please enter valid numbers." : `  ${average}`;
});