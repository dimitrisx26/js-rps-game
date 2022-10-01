


let randomNum = num => num = Math.floor(Math.random() * 3);

function getPlayerChoice () {
    
    let rps = prompt("Pick your weapon! (Rock | Paper | Scissors)")

    return rps;
}


function getComputerChoice () {
    
    const rps = ["rock", "paper", "scissors"];

    return rps[randomNum()];
}



function playRound() {
    let result = 0;
    let playerSelection =  getPlayerChoice().toLowerCase();
    let computerSelection = getComputerChoice();

    console.log(`You chose ${playerSelection} and PC chose ${computerSelection}.`);

    if (playerSelection == computerSelection) {
        console.log("The round is a draw!");
    } else if (playerSelection == "rock"  && computerSelection == "paper") {
        result = 1
        console.log("You Lose the round! Paper beats Rock.");
    } else if (playerSelection == "paper"  && computerSelection == "scissors") {
        result = 1
        console.log("You Lose the round! Scissors beats Paper.");
    } else if (playerSelection == "scissors"  && computerSelection == "rock") {
        result = 1
        console.log("You Lose the round! Rock beats Scissors.");
    } else if (playerSelection == "paper"  && computerSelection == "rock") {
        result = 2
        console.log("You Win the round! Paper beats Rock.");
    } else if (playerSelection == "scissors"  && computerSelection == "paper") {
        result = 2
        console.log("You Win the round! Scissors beats Paper.");
    } else if (playerSelection == "rock"  && computerSelection == "scissors") {
        result = 2
        console.log("You Win the round! Rock beats Scissors.");
    }

    return result;
}

function keepScore(roundResult) {

    if (roundResult == 1) {
        computerScore++;
    } else if (roundResult == 2) {
        playerScore++;
    }

    console.log( `Player ${playerScore} - ${computerScore} Computer \n----------------------------------`);
    
    if ( computerScore == 5) {
        console.log(`You LOST the game!`);
        endCounter = computerScore;
    } else if (playerScore == 5) {
        console.log(`You WON the game!`);
        endCounter = playerScore;
    }

    return endCounter;
}

let playerScore = 0;
let computerScore = 0;
let endCounter = 0;

function game () {

    // while (1 > 0) {
    //     if (keepScore(playRound()) == 5) {
    //         break;
    //     } else {
    //         continue
    //     }
    // }

    do {
        
    } while (keepScore(playRound()) < 5);
    
    
}

game();