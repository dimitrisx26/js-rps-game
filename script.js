const buttons = document.querySelectorAll(".gameBtn");
const restartBtn = document.querySelector(".restart");
const scoreAnnouncement = document.querySelector(".score");
const playerAnnouncement = document.querySelector(".playerChoice");
const pcAnnouncement = document.querySelector(".pcChoice");
const resultAnnouncement = document.querySelector(".result");



buttons.forEach(button => {
    button.addEventListener("click", () => {
        playerChoice = button.value;
        playRound(playerChoice);
    });
});

restartBtn.addEventListener("click", () => {
    playerScore = 0;
    computerScore = 0;
    endCounter = 0;
    scoreAnnouncement.innerText = "Player 0 - 0 Computer";
    resultAnnouncement.innerText = "Let's Play!"
    buttons.forEach(button => {
        button.disabled = false;
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

    playerAnnouncement.innerText = `Player:  ${playerSelection}`;
    pcAnnouncement.innerText = `Computer:  ${computerSelection}`;
    
    if (playerSelection == computerSelection) {
        resultAnnouncement.innerText = "The round is a draw!";
    } else if (playerSelection == "rock" && computerSelection == "paper") {
        result = 1
        resultAnnouncement.innerText = "You Lose the round! Paper beats Rock.";
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        result = 1
        resultAnnouncement.innerText = "You Lose the round! Scissors beats Paper.";
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        result = 1
        resultAnnouncement.innerText = "You Lose the round! Rock beats Scissors.";
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        result = 2
        resultAnnouncement.innerText = "You Win the round! Paper beats Rock.";
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        result = 2
        resultAnnouncement.innerText = "You Win the round! Scissors beats Paper.";
        
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        result = 2
        resultAnnouncement.innerText = "You Win the round! Rock beats Scissors."
    }

    keepScore(result);
}


function keepScore(roundResult) {

    if (roundResult == 1) {
        computerScore++;
    } else if (roundResult == 2) {
        playerScore++;
    }

    scoreAnnouncement.innerText = `Player ${playerScore} - ${computerScore} Computer`;

    if (computerScore == 5) {
        resultAnnouncement.innerText = `You LOST the game!`;
        endCounter = computerScore;
        buttons.forEach(button => {
            button.disabled = true;
        });
    } else if (playerScore == 5) {
        resultAnnouncement.innerText = `You WON the game!`;
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
