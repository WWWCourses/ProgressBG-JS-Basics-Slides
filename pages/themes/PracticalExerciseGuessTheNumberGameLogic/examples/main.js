// Step 1: Initialize Variables
const randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

// Get form and result elements
const form = document.getElementById('guessForm');
const resultDiv = document.getElementById('result');
const historyList = document.getElementById('historyList');

// Function to handle form submission
form.addEventListener('submit', (event) => {
    event.preventDefault();
    const userGuess = parseInt(document.getElementById('guess').value);
    attempts++;

    let message = '';
    let historyMessage = `Guess ${attempts}: ${userGuess} - `;
    if (userGuess > randomNumber) {
        message = 'Too high! Try again.';
        historyMessage += 'Too high';
    } else if (userGuess < randomNumber) {
        message = 'Too low! Try again.';
        historyMessage += 'Too low';
    } else if (userGuess === randomNumber) {
        message = `Congratulations! You guessed the number in ${attempts} attempts.`;
        historyMessage += 'Correct!';
        form.remove();  // Remove form after correct guess
    } else {
        message = 'Invalid input! Please enter a number.';
        historyMessage += 'Invalid input';
    }
    resultDiv.textContent = message;

    // Add guess to history
    const listItem = document.createElement('li');
    listItem.textContent = historyMessage;
    historyList.appendChild(listItem);
});