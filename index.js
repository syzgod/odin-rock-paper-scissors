let computerSelection = "";
let playerSelection = prompt(
  "Please select one: rock, paper, scissors",
  ""
).toLowerCase();
console.log(playerSelection);

let getComputerChoice = () => {
  let randomNum = Math.floor(Math.random() * 6 + 1);

  if (randomNum <= 2) {
    computerSelection = "rock";
    console.log(randomNum, "rock");
  } else if (randomNum > 2 && randomNum <= 4) {
    computerSelection = "paper";
    console.log(randomNum, "paper");
  } else {
    computerSelection = "scissors";
    console.log(randomNum, "scissors");
  }
  return computerSelection;
};
getComputerChoice();
console.log(computerSelection);

let playTheGame = (playerSelection, computerSelection) => {
  if (playerSelection === computerSelection) {
    console.log("Tie! You chose the same!");
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    console.log("Computer won! Paper wrapped rock!");
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    console.log("Player won! Scissors cut paper!");
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    console.log("Player won! Paper wrapped rock!");
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    console.log("Computer won! Rock broke scissors!");
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    console.log("Player won! Rock broke scissors!");
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    console.log("Computer won! Scissors cut paper!");
  }
};
playTheGame(playerSelection, computerSelection);
