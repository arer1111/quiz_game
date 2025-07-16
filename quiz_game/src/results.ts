export function showResults(score: number, total: number) {
  const quizContainer = document.getElementById("quiz-container")!;
  quizContainer.innerHTML = `
      <h1>Quiz Completed!</h1>
      <p>Your score: ${score}/${total}</p>
      <button id="restart-btn">Play Again</button>
    `;

  document.getElementById("restart-btn")!.addEventListener("click", () => {
    location.reload();
  });
}
