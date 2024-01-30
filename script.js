const questionElement = document.getElementById("question");
const answerBtnsElement = document.getElementById("answerBtns");
const nextBtn = document.getElementById("nextBtn");

let score = 0;
let currentQuestionIndex = 0;

function startQuiz() {
  console.log("Quiz started");
  nextBtn.innerText = "Next";
  console.log("Quiz started");
  showQuestion();
};

function showQuestion() {
  resetState();
  console.log("Showing question");
  let currentQuestion = questions[currentQuestionIndex]
  let questionNbr = currentQuestionIndex + 1;
  questionElement.innerText = questionNbr + ". " + currentQuestion.question;
  currentQuestion.answers.forEach(answer => {
    const button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("btn");
    answerBtnsElement.appendChild(button);
    button.addEventListener("click", selectAnswer);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
  });
}

function resetState() {
  nextBtn.classList.add("block");
  while (answerBtnsElement.firstChild) {
    answerBtnsElement.removeChild(answerBtnsElement.firstChild);
  }
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
  } else {
    selectedBtn.classList.add("incorrect");
  }
  Array.from(answerBtnsElement.children).forEach(button => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextBtn.classList.remove("hidden");
};

function showScore() {
  resetState();
  questionElement.innerText = `Your score is ${score} out of ${questions.length}`;
}

function handleNextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    endQuiz();
  }
}

function endQuiz() {
  showScore();
  nextBtn.innerText = "Play again";
  nextBtn.classList.add("block");
}

nextBtn.addEventListener("click", () => {
  if (nextBtn.innerText === "Play again") {
    currentQuestionIndex = 0;
    score = 0;
    nextBtn.classList.add("hidden");
    startQuiz();
  } else {
    handleNextQuestion();
  }
});

startQuiz();