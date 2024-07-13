// main.js

/* ---------------------- Define Questions and answers ---------------------- */
// Array of questions
let questions = [
    "What is the capital of France?",
    "Which language is used for Front-end Web development?",
    "What does CSS stand for?"
];

// Array of options for each question
let options = [
    ["Berlin", "Madrid", "Paris", "Lisbon"],
    ["Python", "JavaScript", "C++", "Java"],
    ["Cascading Style Sheets", "Creative Style System", "Computer Style Sheets", "Colorful Style Sheets"]
];

// Array of correct answers
let answers = [
    "Paris",
    "JavaScript",
    "Cascading Style Sheets"
];

// Get the quiz container element
let quizContainer = document.getElementById('quiz-container');
quizContainer.innerHTML = '';

/* ---------------------------- Display Questions --------------------------- */
// Loop through each question
for (let i = 0; i < questions.length; i++) {
    // Create HTML for the question and its options
    let questionHTML = `
        <div class="question">
            <h2>${questions[i]}</h2>
            <ul>
    `;

    // Loop through each option for the current question
    for (let j = 0; j < options[i].length; j++) {
        questionHTML += `
            <li>
                <label>
                    <input type="radio" name="question${i}" value="${options[i][j]}">
                    ${options[i][j]}
                </label>
            </li>
        `;
    }

    // Close the HTML tags
    questionHTML += `
            </ul>
        </div>
    `;

    // Append the question HTML to the quiz container
    quizContainer.innerHTML += questionHTML;
}

/* ------------------------------ Check Answers ----------------------------- */
// Get the submit button element
let submitButton = document.getElementById('submit-quiz');

// Add click event listener for the submit button
submitButton.addEventListener('click', function() {
    let score = 0; // Initialize the score variable

    // Loop through each question to check the selected answer
    for (let i = 0; i < questions.length; i++) {
        let selectedOption = document.querySelector(`input[name="question${i}"]:checked`);

        // Check if the selected option is correct
        if (selectedOption && selectedOption.value === answers[i]) {
            score++;
        }
    }

    // Display the final score
    let resultContainer = document.getElementById('result');
    resultContainer.innerHTML = '<h2>Your score is ' + score + ' out of ' + questions.length + '</h2>';
});
