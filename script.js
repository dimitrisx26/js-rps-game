const buttons = document.querySelectorAll(".gameBtn");




buttons.forEach(button => {
    button.addEventListener("click", () => {
        playerChoice = button.value;
        playRound(playerChoice);
    });
});



let randomNum = num => num = Math.floor(Math.random() * 3);

function getComputerChoice() {

    const rps = ["rock", "paper", "scissors"];

    return rps[randomNum()];
}



function playRound(playerChoice) {
    let result = 0;
    let playerSelection = playerChoice;
    let computerSelection = getComputerChoice();

    console.log(`You chose ${playerSelection} and PC chose ${computerSelection}.`);

    if (playerSelection == computerSelection) {
        console.log("The round is a draw!");
    } else if (playerSelection == "rock" && computerSelection == "paper") {
        result = 1
        console.log("You Lose the round! Paper beats Rock.");
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        result = 1
        console.log("You Lose the round! Scissors beats Paper.");
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        result = 1
        console.log("You Lose the round! Rock beats Scissors.");
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        result = 2
        console.log("You Win the round! Paper beats Rock.");
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        result = 2
        console.log("You Win the round! Scissors beats Paper.");
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        result = 2
        console.log("You Win the round! Rock beats Scissors.");
    }

    keepScore(result);
}


function keepScore(roundResult) {

    if (roundResult == 1) {
        computerScore++;
    } else if (roundResult == 2) {
        playerScore++;
    }

    console.log(`Player ${playerScore} - ${computerScore} Computer \n----------------------------------`);

    if (computerScore == 5) {
        console.log(`You LOST the game!`);
        endCounter = computerScore;
        buttons.forEach(button => {
            button.disabled = true;
        });
    } else if (playerScore == 5) {
        console.log(`You WON the game!`);
        endCounter = playerScore;
        buttons.forEach(button => {
            button.disabled = true;
        });
    }

    return endCounter;
}

let playerScore = 0;
let computerScore = 0;
let endCounter = 0;

function game() {

    do {

    } while (keepScore() < 5);
}
