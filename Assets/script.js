// STEP 1: Create a start button the user can click and begin the game
var start = document.querySelector("#start-button");
// STEP 2: Once the user clicks the start button they are prompted with a questions
// STEP 2 (A):  As soon as the user starts the quiz the timer starts to run down
function countdown()[
    var timerInterval = setInterval(function (){
        secondLeft--;
        timeLeft.textContent = "Time left: " + secondsLeft + "s";

            if (secondLeft <= 0){
                clearInterval(timerInterval);
                timerLeft.textContent = "Time is up!";
                finish.textContent = "Time is up!";
                gameOver();
            } else if (questionCount >= questionSource.length +1){
                clearInterval(timerInterval);
                gameOver();
            }
    }, 1000);
]
// STEP 3: The user is told whether they get the answer right or wrong
// STEP3(A):    The user is able to click to the next question when they answer the question

// STEP 4: Once they have competed the quiz the intial their name into a high score list.

// STEP 5: the user is able to view the highscore list that is saved

// STEP 6: The user is able to retake the quiz
