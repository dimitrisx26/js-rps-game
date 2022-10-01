


let randomNum = num => num = Math.floor(Math.random() * 3);

function getPlayerChoice () {
    
    return "RocK";
}


function getComputerChoice () {
    
    const rps = ["rock", "paper", "scissors"];

    return rps[randomNum()];
}



function playRound(playerSelection, computerSelection) {
    let result;

    if (playerSelection == computerSelection) {
        result = "It is a draw!"
    } else if (playerSelection == "rock"  && computerSelection == "paper") {
        result = "You Lose! Paper beats Rock."
    } else if (playerSelection == "paper"  && computerSelection == "scissors") {
        result = "You Lose! Scissors beats Paper."
    } else if (playerSelection == "scissors"  && computerSelection == "rock") {
        result = "You Lose! Rock beats Scissors."
    } else if (playerSelection == "paper"  && computerSelection == "rock") {
        result = "You Win! Paper beats Rock."
    } else if (playerSelection == "scissors"  && computerSelection == "paper") {
        result = "You Win! Scissors beats Paper."
    } else if (playerSelection == "rock"  && computerSelection == "scissors") {
        result = "You Win! Rock beats Scissors."
    }

    return result;
}

let playerSelection =  getPlayerChoice().toLowerCase();
let computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));