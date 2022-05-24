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
    if(round === 5) {
      console.log(round);
      logWins();
    }
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
  document.getElementById('round').innerHTML = "Results: ";
  document.getElementById('player').innerHTML = "Player wins: " + playerWins;
  document.getElementById('computer').innerHTML = "Computer wins: " + compWins;
  document.getElementById('winner').innerHTML = "Ties: " + ties;
}

function logRound(playerChoice,computerChoice,winner,i){
  document.getElementById('round').innerHTML = "Round: " + i;
  document.getElementById('player').innerHTML = "Player Chose: " + playerChoice;
  document.getElementById('computer').innerHTML = "Computer Chose: " + computerChoice;
  document.getElementById('winner').innerHTML = winner;
}
