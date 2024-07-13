# General Knowledge Quiz App Project

## Objective
Create an engaging quiz app that tests users on general knowledge questions. The app will fetch questions from a public API, presenting them to the user in a quiz format with multiple-choice answers. Users can select the difficulty level and the category of questions they want to tackle.

## Features

### Quiz Setup
- **Category Selection:** Users can select a quiz category from a range of options, such as Science, History, Geography, Entertainment, etc.
- **Difficulty Selection:** Users can choose the difficulty level of the quiz (Easy, Medium, Hard) to match their knowledge and skills.

### Quiz Interaction
- **Question Display:** Each question is presented one at a time with multiple-choice answers.
- **Timer Option:** Include a timer for each question to add a sense of urgency and challenge.
- **Immediate Feedback:** After submitting an answer, users immediately receive feedback if they were correct or incorrect. Optionally, provide a brief explanation or fact related to the question.
- **Progress Tracking:** Display the current question number and the total number of questions in the quiz.

### Results and Review
- **Score Display:** At the end of the quiz, show the user's score with a message tailored to their performance.
- **Answer Review:** Offer an option to review the questions along with the user's answers and the correct answers for each.

## Data Source
- [Open Trivia Database API](https://opentdb.com/api_config.php): Offers a free API for fetching trivia questions in a variety of categories and difficulty levels. API key is not required for basic usage.

## Wireframe Description

### Home Page
- **Introduction:** Briefly describes the quiz and how to get started.
- **Category and Difficulty Selection:** Dropdown menus or buttons for selecting the quiz category and difficulty.
- **Start Quiz Button:** Initiates the quiz based on the selected preferences.

### Quiz Page
- **Question and Answers:** Display the current question and multiple-choice answers. Highlight selected answer on click.
- **Next Question Button:** Moves to the next question after an answer is selected. This button could also serve to submit the answer, revealing if it was correct or incorrect before proceeding.
- **Quiz Progress:** A progress bar or indicator showing the current question number out of the total.

### Results Page
- **Score Summary:** Displays the total score and a personalized message based on performance.
- **Review Answers Button:** Allows users to go through the quiz questions and see what they got right or wrong.
- **Retake Quiz or Change Settings:** Options to retake the quiz with the same settings or go back to the home page to select new settings.

---

This project challenges you to integrate with a real API, manage application state, handle user inputs and events, and dynamically update the UI in response to user interactions. It's an excellent opportunity to demonstrate your skills in React and modern JavaScript, focusing on creating an interactive and user-friendly application.
