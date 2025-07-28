// export function is used to make the function available for import in other files, such as main.ts. showResults is a function that displays the final results of the quiz.
// The two parameters score and total are used to display the user's score and the total number of questions in the quiz.
// The function updates the inner HTML of the results container to show a message with the user's score. A resttart button is also added to restart the quiz.
export function showResults(score: number, total: number) {
  const quizContainer = document.getElementById("quiz-container")!;
  // This to ensure that the quiz container is not empty and to avoid null errors.
  quizContainer.innerHTML = `
      <h1>Quiz Completed!</h1>
      <p>Your score: ${score}/${total}</p>
      <button id="restart-btn">Play Again</button>
    `;
  // The restart button is created with an ID of "restart-btn" so that it can be easily accessed later.
  // The document.getElementById method is used to get the button element by its ID.
  document.getElementById("restart-btn")!.addEventListener("click", () => {
    location.reload();
  });
}
