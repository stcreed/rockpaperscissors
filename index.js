//jshint esversion:6

const playerSelection = (prompt("Insert choice here: ").toLowerCase());

function computerPlay() {
  const compNum = Math.floor(Math.random() * 3) + 1;
  if (compNum == 1) {
    return "rock";
  } else if (compNum == 2) {
    return "paper";
  } else if (compNum == 3) {
    return "scissors";
  }
}

const computerSelection = computerPlay();

function playRound(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    return "Draw";
  } else if ((playerSelection == "rock" && computerSelection == "Paper") || (playerSelection == "paper" && computerSelection == "scissors") || (playerSelection == "scissors" && computerSelection == "rock")) {
    return "You lose";
  } else if ((playerSelection == "Paper" && computerSelection == "rock") || (playerSelection == "scissors" && computerSelection == "paper") || (playerSelection == "rock" && computerSelection == "scissors")) {
    return "You win";
  }
}



console.log(computerSelection);

console.log(playerSelection);

console.log(playRound(playerSelection, computerSelection));
