let computerSelection = "";
let playerSelection = "";

let playerScore = 0;
let computerScore = 0;

const getComputerChoice = () => {
  let randomNum = Math.floor(Math.random() * 6 + 1);

  if (randomNum <= 2) {
    computerSelection = "rock";
  } else if (randomNum > 2 && randomNum <= 4) {
    computerSelection = "paper";
  } else {
    computerSelection = "scissors";
  }
  return computerSelection;
};

const playRound = (playerSelection, computerSelection) => {
  if (playerSelection === computerSelection) {
    return "Tie! You chose the same!";
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    computerScore++;
    return "Computer won! Paper wrapped rock!";
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    computerScore++;
    return "Computer won! Rock broke scissors!";
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    computerScore++;
    return "Computer won! Scissors cut paper!";
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    playerScore++;
    return "Player won! Scissors cut paper!";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    playerScore++;
    return "Player won! Paper wrapped rock!";
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    playerScore++;
    return "Player won! Rock broke scissors!";
  }
};

const game = () => {
  for (let i = 0; i < 5; i++) {
    playerSelection = prompt(
      "Please select one: rock, paper, scissors",
      ""
    ).toLowerCase();
    if (
      playerSelection !== "rock" &&
      playerSelection !== "paper" &&
      playerSelection !== "scissors"
    ) {
      alert("Please select only from 'rock', 'paper', 'scissors' next time.");
      continue;
    }
    getComputerChoice();
    console.log(
      playRound(playerSelection, computerSelection),
      `(${playerSelection} <--> ${computerSelection})`
    );
  }
  console.log(`Scores after 5 rounds:
   Player: ${playerScore}
   Computer: ${computerScore}`);
  if (playerScore === computerScore) {
    console.log("The game is ended with TIE!");
  } else if (playerScore > computerScore) {
    console.log("You won!");
    return "You won!";
  } else {
    console.log("Computer won!");
    return "Computer won!";
  }
};

game();

// TODO: Add check for wrong prompt / fix check
// TODO: Make it play until 5 win
