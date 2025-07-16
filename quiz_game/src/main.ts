import "./styles.css";
import { questions } from "./quizData";
import type { Question } from "./quizData";

// DOM Elements
const startButton = document.getElementById("start-btn") as HTMLButtonElement;
const nextButton = document.getElementById("next-btn") as HTMLButtonElement;
const questionContainer = document.getElementById(
  "question-container"
) as HTMLDivElement;
const questionElement = document.getElementById(
  "question"
) as HTMLParagraphElement;
const answerButtons = document.getElementById(
  "answer-buttons"
) as HTMLDivElement;
const resultsContainer = document.getElementById("results") as HTMLDivElement;
const scoreElement = document.getElementById("score") as HTMLSpanElement;
const progressElement = document.getElementById("progress") as HTMLDivElement;
const questionImage = document.getElementById(
  "question-image"
) as HTMLImageElement;

// Game State
let currentQuestionIndex: number;
let score: number;

// Event Listeners
startButton.addEventListener("click", startQuiz);
nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    setNextQuestion();
  } else {
    showResults();
  }
});

// Initialize Quiz
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
function setNextQuestion() {
  resetState();
  showQuestion(questions[currentQuestionIndex]);
  updateProgress();
}

// Display question and answers
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
function selectAnswer(selectedIndex: number, correctIndex: number) {
  const buttons = answerButtons.querySelectorAll("button");

  // Disable all buttons after selection
  buttons.forEach((button) => {
    button.disabled = true;
  });

  // Apply correct/incorrect classes
  buttons.forEach((button, index) => {
    if (index === correctIndex) {
      button.classList.add("correct");
    } else if (index === selectedIndex && index !== correctIndex) {
      button.classList.add("incorrect");
    }
  });

  // Update score if correct
  if (selectedIndex === correctIndex) {
    score++;
    updateScore();
  }

  // Show next button
  nextButton.classList.remove("hide");
}

// Reset question state
function resetState() {
  nextButton.classList.add("hide");
  questionImage.classList.add("hide");
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

// Update score display
function updateScore() {
  scoreElement.innerText = score.toString();
}

// Update progress indicator
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

  resultsContainer.innerHTML = `
        <h2>Quiz Completed!</h2>
        <p>Your final score: ${score}/${questions.length}</p>
        <button id="restart-btn" class="btn">Play Again</button>
    `;

  const restartButton = document.getElementById(
    "restart-btn"
  ) as HTMLButtonElement;
  restartButton.addEventListener("click", startQuiz);
}

// Initialize UI
resetState();
resultsContainer.classList.add("hide");
questionContainer.classList.add("hide");
