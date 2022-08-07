// STEP 1: Create a start button the user can click and begin the game
var welcome = document.querySelector("#introduction");
var start = document.querySelector("#start-button");
var into = document.querySelector("#intro");
var question = document.querySelector("#questions");

start.addEventListener("click", startQuiz);

// STEP 2: Once the user clicks the start button they are prompted with a questions
var questionSource = [
  {
    question: "Question 1: Javascript is an _______ language?",
    chocies: [
      "a. Object-Oriented",
      "b. Object-Based",
      "c. Procedural",
      "d. None of the above",
    ],
    answer: "a",
  },
  {
    question:
      "Question 2: Which of the following methods can be used to display data in some form using Javascript?",
    chocies: [
      "a. document.write()",
      "b. console.log()",
      "c. window.alert()",
      "d. All of the above",
    ],
    answer: "d",
  },
  {
    question:
      "Question 3: When an operators value is NULL, the typeof returned by the unary operator is: ",
    chocies: ["a. Boolean", "b. Undefined", "c. Object", "d. Integer"],
    answer: "c",
  },
  {
    question:
      "Question 4: Which function is used to serialize an object into a JSON string in Javascript? ",
    chocies: [
      "a. stringify()",
      "b. parse()",
      "c. convert()",
      "d. None of the above",
    ],
    answer: "a",
  },
  {
    question: "Question 4: How to stop an interval timer in Javascript?",
    chocies: [
      "a. clearTimer",
      "b. intervalOver",
      "c. clearInterval",
      "d. None of the above",
    ],
    answer: "c",
  },
];

// STEP 2 (A):  As soon as the user starts the quiz the timer starts to run down
var timeLeft = document.getElementById("timer");
var secondsLeft = 60;
var questionNumer = 0;
var totalScore = 0;
var questionCount = 1;
function countdown() {
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timeLeft.textContent = "Time left: " + secondsLeft + "s";

    if (secondsLeft <= 0) {
      clearInterval(timerInterval);
      timerLeft.textContent = "Time is up!";
      finish.textContent = "Time is up!";
      gameOver();
    } else if (questionCount >= questionSource.length + 1) {
      clearInterval(timerInterval);
      gameOver();
    }
  }, 1000);
}
function startQuiz() {
  intro.style.display = "none";
  questions.style.display = "block";
  questionNumer = 0;
  countdown();
  showQuestion(questionNumer);
}
// STEP 3: The user is told whether they get the answer right or wrong
// STEP3(A):    The user is able to click to the next question when they answer the question

// STEP 4: Once they have competed the quiz the intial their name into a high score list.

// STEP 5: the user is able to view the highscore list that is saved

// STEP 6: The user is able to retake the quiz
