const startButton = document.querySelector(".start") as HTMLButtonElement;
const questionTitle = document.querySelector("h2") as HTMLElement;
const radioButtonLabels = document.querySelectorAll(".answer-container > label") as NodeList;
const answerContainer = document.querySelector(".answer-container");
const answerForm = document.querySelector(".answer-form") as HTMLFormElement;
const submitButton = document.querySelector(".submit");

startButton.addEventListener("click", startQuiz);

submitButton.addEventListener("click", (e: Event) => {
  console.log("hellooooo");
  e.preventDefault();
  
});

let questionNumber = 0;


function startQuiz() {
  showQuiz()
  nextQuestion();
  
}

function showQuiz() {
  startButton.style.display = "none";
  questionTitle.style.display = "block";
  answerForm.style.display = "flex";
}

function submitAnswer() {
  
}

function showResult() {
  
}

function nextQuestion() {
  const {question, answers, correctAnswer} = questions[questionNumber];
  
  questionTitle.innerText = question;
  answerContainer.innerHTML = "";

  for(let letter in answers) {
    const inputMarkUp = `<label>
    <input type="radio" name="question${questionNumber}" value="${letter}">
    ${answers[letter]}
    </label>`
   answerContainer.innerHTML += inputMarkUp;
  }

  questionNumber++;
}

function showEndGameResult () {
  
}

function playAgain() {
  
}
