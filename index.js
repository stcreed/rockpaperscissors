//jshint esversion:6

const choices = ["rock", "paper", "scissors"];
let winners = [];

function game() {
  for (let i = 1; i <= 5; i++) {
    playRound(i);
    }
  logWins();
}

function playRound(round) {
  const playerSelection = playerChoice();
  const computerSelection = computerChoice();
  const winner = checkWinner(playerSelection, computerSelection);
  winners.push(winner);
  logRound(playerSelection, computerSelection, winner, round);
}

function playerChoice() {
  let input = prompt("Type rock, paper or scissors:");
  while (input == null) {
    input = prompt("Type rock, paper or scissors:");
  }
  input = input.toLowerCase();
  let check = validateInput(input);
  while (check == false) {
    input = prompt(
      "Type rock, paper or scissors. Spelling needs to be exact but capitalisation doesn't matter"
    );
    while (input == null) {
      input = prompt("Type rock, paper or scissors:");
    }
  }
  return input;
}

function validateInput(choice){
  return choices.includes(choice);
}

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

function logRound(playerChoice,computerChoice,winner,round){
  console.log("Round: ",round);
  console.log("Player chose: ",playerChoice);
  console.log("Computer Chose: ",computerChoice);
  console.log(winner);
}
