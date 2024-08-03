// Function to start the countdown
function startCountdown(seconds) {
    // Get the timer container element
    let timerContainer = document.getElementById('timer-container');
    // Display the initial seconds
    timerContainer.innerHTML = seconds;

    // Set up the countdown interval
    let countdown = setInterval(function() {
        // Decrement the seconds
        seconds--;
        // Update the displayed seconds
        timerContainer.innerHTML = seconds;

        // Check if the countdown has reached zero
        if (seconds <= 0) {
            // Clear the interval
            clearInterval(countdown);
            // Display the "Time's up!" message
            timerContainer.innerHTML = 'Time\'s up!';
        }
    }, 1000); // 1000 milliseconds = 1 second
}

// Get the start timer button element
let startTimerButton = document.getElementById('start-timer');

// Add a click event listener to the start timer button
startTimerButton.addEventListener('click', function() {
    // Get the value from the time input field
    let timeInput = document.getElementById('time-input').value;
    // Parse the input value to an integer
    let seconds = parseInt(timeInput);

    // Check if the input is a valid number and greater than zero
    if (!isNaN(seconds) && seconds > 0) {
        // Start the countdown with the inputted seconds
        startCountdown(seconds);
    } else {
        // Display an alert if the input is invalid
        alert('Please enter a valid number of seconds.');
    }
});