// random number genaratior
let randomNumber = (parseInt(Math.random() * 100 + 1));

// access & link -> submit,userinput and quit and other
let userInput = document.querySelector("#user-input");  //user input
let submit = document.querySelector("#submit-btn"); // submit btn
let quit = document.querySelector("#quit-btn"); // quit btn
let guessSlot = document.querySelector("#previous-guess");  // previous guess
let totalAttempt = document.querySelector("#attempt");  // total attempt
let total_attempt = document.querySelector("#atmt");  // total attempt 2nd place
let helpMsg = document.querySelector("#low-or-high"); //help msg
let help_Msg = document.querySelector("#lowOrHigh"); //help msg for two place
let resetBtn = document.querySelector("#reset-btn");    // reset button
let rewardContainer = document.querySelector(".rwd-container"); // reward container
let gameContainer = document.querySelector(".game-container"); // game container
let rewardPoint = document.querySelector("#point-number"); // reward number
let pointOrPoints = document.querySelector("#point");   // chnage point or points

// declare variables
// let points = 0;
let is_quit = 0;
let playGame = true;
let totalCount = 0;     //track how much chances taken
// resetBtn.disabled = false;      // at first keep disable reset button

if (playGame) {
    submit.addEventListener("click", (e) => {
        e.preventDefault();
        const guess = parseInt(userInput.value);
        // console.log(guess);
        validateGuess(guess);
    })
}

// take in range input and call next proces
function validateGuess(guess) {
    if (isNaN(guess)) {
        alert("Please enter a valid number.");
    }
    else if (guess < 1) {
        alert("Please Enter a number Greater than 1.");
    }
    else if (guess > 100) {
        alert("Please Enter a number Less than 100.");
    }
    else {
        totalCount++;
        totalAttempt.innerText = totalCount;
        total_attempt.innerText = totalCount;
        displayGuess(guess);
        checkGuess(guess);
    }
};

// check guess is correct or not
function checkGuess(guess) {
    if (guess === randomNumber) {
        displayMsg(`Congratulations..!!You Guess it correct.`);
        helpMsg.style.backgroundColor = "#6ffa99ff";
        endGame();
        reward(totalCount);
    }
    else if (guess < randomNumber) {
        displayMsg(`You have enter Too low. Take a bigger guess... `);
    }
    else if (guess > randomNumber) {
        displayMsg(`You have enter Too High. Take a smaller guess... `);
    }
};

// display previous guess
function displayGuess(guess) {
    userInput.value = "";
    guessSlot.innerHTML += `${guess}, `;
};

// display help-msg
function displayMsg(message) {
    helpMsg.innerText = message;
    help_Msg.innerText = message;
};

// end game function
function endGame() {
    userInput.value = "";
    userInput.disabled = true;
    submit.disabled = true;
    quit.disabled = true;
    // resetBtn.disabled = false;
    playGame = false;
    randomNumber = 0;   // dispose randomNumber value
    rewardContainer.classList.remove("hide");   // tovisable the game container
    gameContainer.classList.add("hide");    //to hide the game container
};

//  reset or start a new game
function newGame() {
    playGame = true;
    userInput.value = "";
    totalAttempt.innerText = 0;
    total_attempt.innerText = 0;
    randomNumber = (parseInt(Math.random() * 100 + 1)); // re-generate random Number
    displayMsg("Hayy..!! Your game is ready");
    userInput.disabled = false;
    submit.disabled = false;
    quit.disabled = false;
    totalCount = 0;
    guessSlot.innerHTML = '';
    // resetBtn.disabled = true;
    rewardContainer.classList.add("hide");  //to hide the reward container
    gameContainer.classList.remove("hide"); //to make visible the game container
    is_quit = 0;
    rewardPoint.innerText = "0";
    pointOrPoints.innerText = "Point"
    helpMsg.style.backgroundColor = "#ffffffc6";
};

// quit game
quit.addEventListener('click', () => {
    displayMsg(`Ohh..!! You have Quit the game!`);
    helpMsg.style.backgroundColor = "#fe5d5dff";
    is_quit = 1;
    endGame();
});

// reset or play again button
resetBtn.addEventListener('click', () => {
    newGame();
});

// reward
function reward(totalCount) {
    // if quit then no reward
    if (is_quit === 0) {
        //if not quit then give reward
        if (totalCount === 1) {
            // console.log("100 point");
            rewardPoint.innerText = "100";
            pointOrPoints.innerText = "Points"
        }
        else if (totalCount === 2) {
            // console.log("75 point");
            rewardPoint.innerText = "75";
            pointOrPoints.innerText = "Points"
        }
        else if (totalCount === 3) {
            // console.log("50 point");
            rewardPoint.innerText = "50";
            pointOrPoints.innerText = "Points"
        }
        else if (totalCount === 4) {
            // console.log("30 point");
            rewardPoint.innerText = "30";
            pointOrPoints.innerText = "Points"
        }
        else if (totalCount === 5) {
            // console.log("20 point");
            rewardPoint.innerText = "20";
            pointOrPoints.innerText = "Points"
        }
        else if (totalCount === 6) {
            // console.log("10 point");
            rewardPoint.innerText = "10";
            pointOrPoints.innerText = "Points"
        }
        else if (totalCount >= 7) {
            // console.log("5 point");
            rewardPoint.innerText = "5";
            pointOrPoints.innerText = "Points"
        }
    }
    else {
        // console.log("0 point");
    }
}