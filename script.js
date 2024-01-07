const correctAnswers = ["Javascript", "int $main", "*(a+3)", "William Shakespeare", "JavaScript"];
let currentQuestionIndex = 0;

function nextQuestion(nextQuestionId) {
  document.getElementById(`question${currentQuestionIndex + 1}`).style.display = "none";
  currentQuestionIndex++;
  document.getElementById(nextQuestionId).style.display = "block";
}

function submitQuiz() {
  const form = document.getElementById("quiz-form");
  const resultContainer = document.getElementById("result");
  let score = 0;

  for (let i = 1; i <= 5; i++) {
    const selectedAnswer = form.querySelector(`input[name="q${i}"]:checked`);
    if (selectedAnswer) {
      const userAnswer = selectedAnswer.value;
      if (userAnswer === correctAnswers[i - 1]) {
        score++;
      }
    }
  }

  const resultMessage = alert(`Your score: ${score} out of 5`);
  resultContainer.textContent = resultMessage;
}

function reloadQuiz() {
  const form = document.getElementById("quiz-form");
  const resultContainer = document.getElementById("result");

  for (let i = 1; i <= 5; i++) {
    document.getElementById(`question${i}`).style.display = "none";
  }

  currentQuestionIndex = 0;
  document.getElementById("question1").style.display = "block";
  resultContainer.textContent = '';
  form.reset();
}