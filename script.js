
let playerPoints = 0;
let computerPoints = 0;

function playRound(choice) {
    //make input lowercase and then check if it is rock, paper or sciccos
    let player1LowerCase = choice.toLowerCase();

    let botChoice = getComputerChoice();
    let botChoiceLowerCase = botChoice.toLowerCase();

    let result = document.getElementById("result");
    let h2Element = document.querySelector("#result h2");
    result.appendChild(h2Element);

    if (player1LowerCase == botChoiceLowerCase) {
        resultRound.textContent = `${botChoiceLowerCase} and ${player1LowerCase}, so it is a tie!`;
        playerPoints++;
        computerPoints++;
        document.querySelector("#playerPoints").textContent = playerPoints;
        document.querySelector("#computerPoints").textContent = computerPoints;
        alert("ja unentschieden!")
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
        alert("du bist hier bre")
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

    return;
}

// This function randomly selects one of three options (Rock, Paper, or Scissors) for the computer's choice
function getComputerChoice() {
    let choices = ["Rock", "Paper", "Scissors"]
    let number = Math.floor(Math.random() * 3);
    //return random choice for rock, paper o scissos
    return choices[number];
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


