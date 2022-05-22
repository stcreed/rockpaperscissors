//jshint esversion:6

const choices = ["rock", "paper", "scissors"];
let winners = [];

let playerChoice = "";

let round = 1;

function playRound(choice) {
  for (i = round; i <= 5; i++) {
    const playerSelection = choice;
    const computerSelection = computerChoice();
    const winner = checkWinner(playerSelection, computerSelection);
    winners.push(winner);
    logRound(playerSelection, computerSelection, winner, i);
    round = i + 1;
    return;
}}

function computerChoice() {
  const compNum = Math.floor(Math.random() * 3) + 1;
  if (compNum == 1) {
    return "rock";
  } else if (compNum == 2) {
    return "paper";
  } else if (compNum == 3) {
    return "scissors";
  }
}

function checkWinner(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    return "Draw";
  } else if (
    (playerSelection == "rock" && computerSelection == "paper") ||
    (playerSelection == "paper" && computerSelection == "scissors") ||
    (playerSelection == "scissors" && computerSelection == "rock")) {
    return "You lose";
  } else{
    return "You win";
  }
}

function logWins(){
  let playerWins = winners.filter((item) => item == "You win").length;
  let compWins = winners.filter((item) => item == "You lose").length;
  let ties = winners.filter((item) => item == "Draw").length;
  console.log("Results:");
  console.log("Player wins: ",playerWins);
  console.log("Computer wins: ",compWins);
  console.log("Ties: ",ties);
}

function logRound(playerChoice,computerChoice,winner,i){
  console.log("Round: ",i);
  console.log("Player chose: ",playerChoice);
  console.log("Computer Chose: ",computerChoice);
  console.log(winner);
}
