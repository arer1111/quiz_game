import "./styles.css"; // Importing styles for the quiz game. styles is how appearance is managed in this project.
import { questions } from "./quizData"; // Importing quiz data containing questions and answers.
import type { Question } from "./quizData"; // Importing the Question interface for type safety in TypeScript.

// DOM Elements
const startButton = document.getElementById("start-btn") as HTMLButtonElement; // here it is (creating) initialising a variable for the start button. document is used to acces the HTML elements and select the start button by its ID.
const nextButton = document.getElementById("next-btn") as HTMLButtonElement; // here it is doing the same for the next button.
const questionContainer = document.getElementById(
  "question-container"
) as HTMLDivElement; // variable for the question container, which holds the current question and answers. It is a div element.
const questionElement = document.getElementById(
  "question"
) as HTMLParagraphElement; // variable which gets the element with ID question from the HTML, which will display the current question text. It is a paragraph element.
const answerButtons = document.getElementById(
  "answer-buttons"
) as HTMLDivElement; // variable for the answer buttons container, which holds the buttons for each answer option. It is a div element.
const resultsContainer = document.getElementById("results") as HTMLDivElement; // it is a variable for the results container, which will display the final score and a restart button. It is a div element.
const scoreElement = document.getElementById("score") as HTMLSpanElement; // variable to display the current score.
const progressElement = document.getElementById("progress") as HTMLDivElement; // variable for the progress indicator, which shows the current question number and total questions.
const questionImage = document.getElementById(
  "question-image"
) as HTMLImageElement; // variable for the question image, which will display an image related to the current question. It is an image element.

// Game State
// these variables are used to keep track of the current state of the quiz game.
// currentQuestionIndex keeps track of which question the user is currently on, and score keeps track.
// score is used to keep track of the user's score throughout the quiz.
// they are undefined here and will be initialied when the quiz starts. this is so it can be avoided that they are used before the quiz starts.
let currentQuestionIndex: number;
let score: number;

// Event Listeners - a function that waits for a specific event to occur, such as a button click.
startButton.addEventListener("click", startQuiz);
// it is a varaible referncing an HTML button element with the ID "start-btn". when the button is clicked, it will call the startQuiz function to begin the quiz.
nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    setNextQuestion();
  } else {
    showResults();
  }
}); // this is an event listener for the next button. A conditional checks if the current question index is less than the total number of questions. If it is, it calls setNextQuestion to display the next question. If not, it calls showResults to display the final score.

// Initialize Quiz
// This function is called when the user clicks the start button to begin the quiz. The hide class is added to the start button and results container to hide them. The remove method is used to show the question container.
// Here the current question index and score are defined and set to 0. So the quiz starts from the first question with a score of 0.
// The updateScore function is called to display the initial score, and setNextQuestion is called to display the first question.
function startQuiz() {
  startButton.classList.add("hide");
  resultsContainer.classList.add("hide");
  questionContainer.classList.remove("hide");
  currentQuestionIndex = 0;
  score = 0;
  updateScore();
  setNextQuestion();
}
// Set up next question
// This function prepare the quiz UI for the next question. It resets the state by calling resetState, displays the current question using showQuestion, and updates the progress indicator with updateProgress.
function setNextQuestion() {
  resetState();
  showQuestion(questions[currentQuestionIndex]);
  updateProgress();
}

// Display question and answers
// This function displays the current question and the options for answers. It sets the question text, updates to show the question image, and creates buttons for each answer option.
// Each button is assigned a clock event listener so that when clicked, it calls selectAnswer with the selected index and the correct answer index. This allows the user to select an answer and check if it is correct.
function showQuestion(question: Question) {
  questionElement.innerText = question.question;
  questionImage.src = question.image;
  questionImage.classList.remove("hide");

  question.options.forEach((option: string, index: number) => {
    const button = document.createElement("button");
    button.innerText = option;
    button.classList.add("btn");
    button.addEventListener("click", () =>
      selectAnswer(index, question.answer)
    );
    answerButtons.appendChild(button);
  });
}

// Handle answer selection
// This function is called when the user selects an answer.
function selectAnswer(selectedIndex: number, correctIndex: number) {
  const buttons = answerButtons.querySelectorAll("button");

  // Disable all buttons after selection to prevent further clicks.
  buttons.forEach((button) => {
    button.disabled = true;
  });

  // Apply correct/incorrect classes. This displays the correct answer and highlights the selected answer. How it is done. It loops through all answer buttons and to apply the correct or incorrect class based on the selected index and the correct answer index.
  buttons.forEach((button, index) => {
    if (index === correctIndex) {
      button.classList.add("correct");
    } else if (index === selectedIndex && index !== correctIndex) {
      button.classList.add("incorrect");
    }
  });

  // Update score if correct
  // If the selected answer is correct, increment the score and update the score display. It is a conditional statement.
  if (selectedIndex === correctIndex) {
    score++;
    updateScore();
  }

  // Show next button
  nextButton.classList.remove("hide");
}

// Reset question state. This function resets the UI to prepare for the next question. It hides the next button, hides from the question image.
function resetState() {
  nextButton.classList.add("hide");
  questionImage.classList.add("hide");
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

// Update score display this updated the score element in the UI to show the current score. It sets the inner text of the score element to the current score value.
function updateScore() {
  scoreElement.innerText = score.toString();
}

// Updates progress element's text to show the current question base on the current question index and total number of questions
function updateProgress() {
  progressElement.innerText = `Question ${currentQuestionIndex + 1}/${
    questions.length
  }`;
}

// Show final results
function showResults() {
  questionContainer.classList.add("hide");
  nextButton.classList.add("hide");
  resultsContainer.classList.remove("hide");
  // Display final score and a button to restart the quiz
  resultsContainer.innerHTML = `
        <h2>Quiz Completed!</h2>
        <p>Your final score: ${score}/${questions.length}</p>
        <button id="restart-btn" class="btn">Play Again</button>
    `;

  // event listener for the restart button to restart the quiz
  const restartButton = document.getElementById(
    "restart-btn"
  ) as HTMLButtonElement;
  restartButton.addEventListener("click", startQuiz);
}

// Initialize UI. To hide the question container and results container at the start of the quiz, so they are not visible until the quiz starts.
resetState();
resultsContainer.classList.add("hide");
questionContainer.classList.add("hide");
