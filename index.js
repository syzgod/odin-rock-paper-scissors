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

let playRound = (playerSelection, computerSelection) => {
  if (playerSelection === computerSelection) {
    return "Tie! You chose the same!";
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    return "Computer won! Paper wrapped rock!";
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    return "Player won! Scissors cut paper!";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    return "Player won! Paper wrapped rock!";
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    return "Computer won! Rock broke scissors!";
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    return "Player won! Rock broke scissors!";
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    return "Computer won! Scissors cut paper!";
  }
};
console.log(playRound(playerSelection, computerSelection));

let game = () => {
  let playerScore = 0;
  let computerScore = 0;

  for (let i = 0; i <= 5; i++) {
    playRound(playerSelection, computerSelection);
  }
};
