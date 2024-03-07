function playRound(choice) {
    //make input lowercase and then check if it is rock, paper or sciccos
    let player1LowerCase = choice.toLowerCase();

    let botChoice = getComputerChoice();
    let botChoiceLowerCase = botChoice.toLowerCase();

    if (player1LowerCase == botChoiceLowerCase) {
        console.log(`${botChoiceLowerCase} and ${player1LowerCase}, so it is a tie!`);
        return;
    }

    if (player1LowerCase == "rock") {
        if (botChoiceLowerCase == "paper") {
            console.log("Player 2(bot) wins, paper beats rock!");
        } else {
            console.log("Player 1(you) wins, rock beats scissors!");
        }
    } else if (player1LowerCase == "scissors") {
        if (botChoiceLowerCase == "paper") {
            console.log("Player 1(you) win, scissors beats paper");
        } else {
            console.log("Player 2(bot) wins, rock beats scissors!");
        }
    } else {
        if(botChoiceLowerCase == "scissors") {
            console.log("Player 2(bot) won, scissors beats paper!")
        } else {
            console.log("Playe 1(you) win, paper beats rock!")
        }
    }
    return;
}

function getComputerChoice() {
    let choices = ["Rock", "Paper", "Scissors"]
    //get random number between 1 and 3
    let number = Math.floor(Math.random() * 3);
    //return random choice for rock, paper o scissos
    return choices[number];
}




let playerPoints = 0;
let computerPoints = 0;


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


