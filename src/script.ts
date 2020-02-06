const startButton = document.querySelector(
  ".start-button"
) as HTMLButtonElement;
const startContainer = document.querySelector(
  ".start-container"
) as HTMLElement;
const questionContainer = document.querySelector(
  ".question-container"
) as HTMLElement;
const questionTitle = document.querySelector(".question") as HTMLElement;
const answerButtons = document.querySelector(".answer-buttons") as HTMLElement;
const nextButton = document.querySelector(".next-button") as HTMLButtonElement;

let questionNumber = 0;

startButton.addEventListener("click", startGame);
nextButton.addEventListener("click", () => {
  questionNumber++;
  if (questionNumber < questions.length) {
    setNextQuestion();

  } else { // slut
    // dölj nästa knappen
    nextButton.classList.add("hide");

    // skapa en spela igen knapp
    const playAgain = document.createElement("button") as HTMLButtonElement;
    playAgain.innerText = "Play again";
    playAgain.addEventListener("click", () => {
      startGame();
      // ta bort spela igen knappen
      questionContainer.removeChild(playAgain)
    });

    // lägg till spepla igen knappen
    questionContainer.appendChild(playAgain)

  }
})

function startGame() {
  startContainer.classList.add("hide");
  questionContainer.classList.remove("hide");

  questionNumber = 0;
  setNextQuestion();
}

function setNextQuestion() {
  resetState();
  showQuestion(questions[questionNumber]);
}

function showQuestion(question: Question) {
  questionTitle.innerText = question.title;

  const letters = Object.keys(question.answers);

  letters.forEach(letter => {
    const button = document.createElement("button");
    const answer = question.answers[letter];
    button.innerText = answer;

    if (letter === question.correctAnswer) {
      button.dataset.correct = letter;
    }

    button.addEventListener("click", selectAnswer);

    answerButtons.appendChild(button);
  });
}

function selectAnswer(e: Event) {
  // visa next knappen
  nextButton.classList.remove("hide");
  // knappen som blev klicka på
  const selectedButton = e.target as HTMLButtonElement;
  // hämta svaret från html elementets dataset
  //const correct = selectedButton.dataset.correct;

  // ändra knapparnas färger
  Array.from(answerButtons.children).forEach((button: HTMLButtonElement) => {
    if (button.dataset.correct) {
      button.classList.add("correct")
    } else {
      button.classList.add("wrong")
    }
  });
}

function resetState() {
  nextButton.classList.add("hide");
  answerButtons.innerHTML = "";
}
