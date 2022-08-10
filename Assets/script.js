// STEP 1: Create a start button the user can click and begin the game
var welcome = document.querySelector("#introduction");
var start = document.querySelector("#start-button");
var intro = document.querySelector("#intro");
var question = document.querySelector("#questions");
var askQuestion = document.querySelector("#ask-question");
var scoreBoard = document.querySelector("#submit");
var finalScore = document.querySelector("#final-score");
var userInitial = document.querySelector("#inital");
var submitBtn = document.querySelector("#submit-button");
var highScore = document.querySelector("#highscore");
var scoreRecord = document.querySelector("#score-record");
var scoreCheck = document.querySelector("#score");
var finish = document.querySelector("#finish");

var back = document.querySelector("#back");
var clear = document.querySelector("#clear");

start.addEventListener("click", startQuiz);

// STEP 2: Once the user clicks the start button they are prompted with a questions
var questionSource = [
  {
    question: "Question 1: Javascript is an _______ language?",
    choices: [
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
    choices: [
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
    choices: ["a. Boolean", "b. Undefined", "c. Object", "d. Integer"],
    answer: "c",
  },
  {
    question:
      "Question 4: Which function is used to serialize an object into a JSON string in Javascript? ",
    choices: [
      "a. stringify()",
      "b. parse()",
      "c. convert()",
      "d. None of the above",
    ],
    answer: "a",
  },
  {
    question: "Question 4: How to stop an interval timer in Javascript?",
    choices: [
      "a. clearTimer",
      "b. intervalOver",
      "c. clearInterval",
      "d. None of the above",
    ],
    answer: "c",
  },
];
var choiceButtons = document.querySelectorAll("#choices");
var answer1 = document.querySelector("#answer1");
var answer2 = document.querySelector("#answer2");
var answer3 = document.querySelector("#answer3");
var answer4 = document.querySelector("#answer4");
var check = document.querySelector("#check");

answer1.addEventListener("click", checkAnswer);
answer2.addEventListener("click", checkAnswer);
answer3.addEventListener("click", checkAnswer);
answer4.addEventListener("click", checkAnswer);

function showQuestion(n) {
  askQuestion.textContent = questionSource[n].question;
  answer1.textContent = questionSource[n].choices[0];
  answer2.textContent = questionSource[n].choices[1];
  answer3.textContent = questionSource[n].choices[2];
  answer4.textContent = questionSource[n].choices[3];
  questionNumer = n;
}
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
      timeLeft.textContent = "Time is up!";
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
function checkAnswer(event) {
  event.preventDefault();
  check.style.display = "block";
  //   setTimeout(function () {
  //     check.style.display = "none";
  //   }, 1000);
  console.log(questionSource[questionNumer]);
  if (questionSource[questionNumer].answer == event.target.value) {
    check.textContent = "Correct!";
    totalScore = totalScore + 1;
  } else {
    secondsLeft = secondsLeft - 10;
    check.textContent =
      "Wrong! The correct answer is " +
      questionSource[questionNumer].answer +
      " .";
  }
  if (questionNumer < questionSource.length - 1) {
    showQuestion(questionNumer + 1);
  } else {
    gameOver();
  }
  {
    questionCount++;
  }
}
function gameOver() {
  question.style.display = "none";
  scoreBoard.style.display = "block";
  console.log(scoreBoard);
  finalScore.textContent = "Your final score is :" + totalScore;
  timeLeft.style.display = "none";
}

// STEP3(A):    The user is able to click to the next question when they answer the question

// STEP 4: Once they have competed the quiz the intial their name into a high score list.

// STEP 5: the user is able to view the highscore list that is saved
function getScore() {
  var currentList = localStorage.getItem("ScoreList");
  if (currentList !== null) {
    freshList = JSON.parse(currentList);
    return freshList;
  } else {
    freshList = [];
  }
  return freshList;
}

function renderScore() {
  scoreRecord.innerHTML = "";
  scoreRecord.style.display = "block";
  var highScores = sort();
  // Slice the high score array to only show the top five high scores.
  var topFive = highScores.slice(0, 5);
  for (var i = 0; i < topFive.length; i++) {
    var item = topFive[i];
    // Show the score list on score board
    var li = document.createElement("li");
    li.textContent = item.user + " - " + item.score;
    li.setAttribute("data-index", i);
    scoreRecord.appendChild(li);
  }
}

function sort() {
  var unsortedList = getScore();
  if (getScore == null) {
    return;
  } else {
    unsortedList.sort(function (a, b) {
      return b.score - a.score;
    });
    return unsortedList;
  }
}

function addItem(n) {
  var addedList = getScore();
  addedList.push(n);
  localStorage.setItem("ScoreList", JSON.stringify(addedList));
}

function saveScore() {
  var scoreItem = {
    user: userInitial.value,
    score: totalScore,
  };
  addItem(scoreItem);
  renderScore();
}

submitBtn.addEventListener("click", function (event) {
  event.preventDefault();
  scoreBoard.style.display = "none";
  intro.style.display = "none";
  highScore.style.display = "block";
  question.style.display = "none";
  saveScore();
});

scoreCheck.addEventListener("click", function (event) {
  event.preventDefault();
  scoreBoard.style.display = "none";
  intro.style.display = "none";
  highScore.style.display = "block";
  question.style.display = "none";
  renderScore();
});

back.addEventListener("click", function (event) {
  event.preventDefault();
  scoreBoard.style.display = "none";
  intro.style.display = "block";
  highScore.style.display = "none";
  question.style.display = "none";
  location.reload();
});

clear.addEventListener("click", function (event) {
  event.preventDefault();
  localStorage.clear();
  renderScore();
});
