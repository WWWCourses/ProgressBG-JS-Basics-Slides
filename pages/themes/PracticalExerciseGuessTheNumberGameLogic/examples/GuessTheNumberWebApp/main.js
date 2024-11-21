// Step 1: Initialize Variables
const randomNumber = Math.floor(Math.random() * 100) + 1;
console.log(`randomNumber=${randomNumber}`);
let attempts = 0;

// Get DOM elements
const form = document.getElementById('guessForm');
const resultDiv = document.getElementById('result');
const historyList = document.getElementById('historyList');
const userGuessInput = document.getElementById('guess');
const gameContainer = document.querySelector('#game-container');

// Function to handle form submission
form.addEventListener('submit', function(event){
    event.preventDefault();

    const userGuess = parseInt(userGuessInput.value);
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

        // add "New Game" button at the end of #game-container
        const newGameBtn = document.createElement('button');
        newGameBtn.innerHTML='New Game';
        newGameBtn.id = 'btn-new-game';
        newGameBtn.addEventListener('click', function(event) {
            // reload page on "New Game" button click
            window.location.reload();
        })
        gameContainer.appendChild(newGameBtn)
    } else {
        message = 'Invalid input! Please enter a number.';
        historyMessage += 'Invalid input';
    }
    resultDiv.textContent = message;

    // Add guess to history
    const listItem = document.createElement('li');
    listItem.textContent = historyMessage;
    historyList.appendChild(listItem);

    // Clear userGuessInput
    userGuessInput.value="";

    userGuessInput.focus();
});