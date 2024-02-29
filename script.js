function getComputerChoice() {
    let choices = ["Rock", "Paper", "Scissors"]

    //get random number between 1 and 3
    let number = Math.floor(Math.random() * 3);

    //return random choice for rock, paper o scissos
    return choices[number];
}



function game() {
    let choices = ["Rock", "Paper", "Scissors"]

    let player1Choice = prompt("Your choice: ");

    //make input lowercase and then check if it is rock, paper or sciccos
    let player1LowerCase = player1Choice.toLowerCase();


    while ((player1LowerCase != "rock") && (player1LowerCase != "paper" && (player1LowerCase != "scissors"))) {
        player1LowerCase = prompt("Only rock, paper or scissor! Your choice: ");
        player1LowerCase = player1LowerCase.toLowerCase();
    }

    let botChoice = getComputerChoice();
    let botChoiceLowerCase = botChoice.toLowerCase();

    if (player1LowerCase == botChoiceLowerCase) {
        console.log(`${botChoiceLowerCase} and ${player1LowerCase}, so it is a tie!`);
        return; // leave method after this result
    }

    if (player1LowerCase == "rock") {
        if (botChoiceLowerCase == "paper") {
            console.log("Player 2(bot) wins, paper beats rock!");
        } else {
            console.log("Player 1(you) wins, rock beats scissors!");
        }
    }

    return;
}

function playGame() {
    for (let i = 0; i < 5; i++) {
        game();
    }
}
//execute game 5 times
playGame();

