
let playerPoints = 0;
let computerPoints = 0;

let result = document.getElementById("result");
let h2Element = document.querySelector("#result h2");
result.appendChild(h2Element);


function playRound(choice) {
    //make input lowercase and then check if it is rock, paper or sciccos
    let player1LowerCase = choice.toLowerCase();

    //automatic chose for the computer
    let botChoice = getComputerChoice();
    let botChoiceLowerCase = botChoice.toLowerCase();


    if (player1LowerCase == botChoiceLowerCase) {
        h2Element.textContent = `${botChoiceLowerCase} and ${player1LowerCase}, so it is a tie!`;
        checkPoints();
        return;
    }

    if (player1LowerCase == "rock") {
        if (botChoiceLowerCase == "paper") {
            h2Element.textContent = "Player 2(bot) wins, paper beats rock!";
            computerPoints++;
        } else {
            h2Element.textContent = "Player 1(you) wins, rock beats scissors!";
            playerPoints++;
        }
    } else if (player1LowerCase == "scissors") {
        if (botChoiceLowerCase == "paper") {
            h2Element.textContent = "Player 1(you) win, scissors beats paper";
            playerPoints++;
        } else {
            h2Element.textContent = "Player 2(bot) wins, rock beats scissors!";
            computerPoints++;
        }
    } else {
        if (botChoiceLowerCase == "scissors") {
            h2Element.textContent = "Player 2(bot) won, scissors beats paper!";
            computerPoints++;
        } else {
            h2Element.textContent = "Player 1(you) win, paper beats rock!"
            playerPoints++;
        }
    }

    //adjust points for both players after the round
    document.querySelector("#playerPoints").textContent = playerPoints;
    document.querySelector("#computerPoints").textContent = computerPoints;

    checkPoints();

    return;
}


//this function checks whether one of the 2 players has reached 5 points and thus ended the game
function checkPoints() {
    let winner;

    if (playerPoints == 5) {
        winner = document.createElement("h2");
        winner.textContent = "You have 5 points, you win the game!"
        winner.style.color = "green";
        result.appendChild(winner);

        playAgainButton = document.createElement("button");
        playAgainButton.textContent = "Play Again";
        playAgainButton.addEventListener("click", function () {
            resetPoints(winner, playAgainButton);
        });
        result.appendChild(playAgainButton);

        disableButtons();


    } else if (computerPoints == 5) {
        winner = document.createElement("h2");
        winner.textContent = "You lose, the bot wins the game!"
        winner.style.color = "red";
        result.appendChild(winner);

        playAgainButton = document.createElement("button");
        playAgainButton.textContent = "Play Again";
        playAgainButton.addEventListener("click", function () {
            resetPoints(winner, playAgainButton);
        });
        result.appendChild(playAgainButton);

        disableButtons();
    }
}

//disable the buttons after the end of the game
function disableButtons() {
    document.querySelector(".rock").disabled = true;
    document.querySelector(".paper").disabled = true;
    document.querySelector(".scissors").disabled = true;
}

function enableButtons() {
    document.querySelector(".rock").disabled = false;
    document.querySelector(".paper").disabled = false;
    document.querySelector(".scissors").disabled = false;

}

//this function clears both the text of the result and the declaration of the winner after an end of the game
function clearText(winner) {
    result.removeChild(winner);
}
// This function randomly selects one of three options (Rock, Paper, or Scissors) for the computer's choice
function getComputerChoice() {
    let choices = ["Rock", "Paper", "Scissors"]
    let number = Math.floor(Math.random() * 3);
    //return random choice for rock, paper o scissos
    return choices[number];
}


//this function resets the game by resetting the points to 0 and enabling the buttons again
//to-do: remove from result the h2 winner declaration
function resetPoints(winner, button) {
    playerPoints = 0;
    computerPoints = 0;

    //set the point counter to 0
    document.querySelector("#playerPoints").textContent = playerPoints;
    document.querySelector("#computerPoints").textContent = computerPoints;


    enableButtons();

    result.removeChild(winner);
    h2Element.textContent = "";
    result.removeChild(button);


    return;
}


//add eventlistener to 3 buttons to detect which option was choosed
let rockButton = document.querySelector(".rock")
let paperButton = document.querySelector(".paper")
let scissorsButton = document.querySelector(".scissors")

rockButton.addEventListener("click", function () {
    playRound("Rock");
});
paperButton.addEventListener("click", function () {
    playRound("Paper");
});
scissorsButton.addEventListener("click", function () {
    playRound("Scissors");
});


