const rockBtn = document.querySelector(".rock-btn");
const paperBtn = document.querySelector(".paper-btn");
const scissorsBtn = document.querySelector(".scissors-btn");
const againBtn = document.querySelector(".again-btn");
const playerNum = document.querySelector(".player-score");
const computerNum = document.querySelector(".computer-score");
const message = document.querySelector(".message");

rockBtn.addEventListener("click", function (e) {
  e.preventDefault();
  playerSelection = "rock";
  console.log(playerSelection);
  getComputerChoice();
  playRound(playerSelection, computerSelection);
});

paperBtn.addEventListener("click", (e) => {
  e.preventDefault();
  playerSelection = "paper";
  console.log(playerSelection);
  getComputerChoice();
  playRound(playerSelection, computerSelection);
});

scissorsBtn.addEventListener("click", (e) => {
  e.preventDefault();
  playerSelection = "scissors";
  console.log(playerSelection);
  getComputerChoice();
  playRound(playerSelection, computerSelection);
});

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
    message.innerText = "Tie! You chose the same!";
    checkWinner();
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    computerScore++;
    computerNum.innerText = computerScore;
    message.innerText = "Computer won! Paper wrapped rock!";
    checkWinner();
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    computerScore++;
    computerNum.innerText = computerScore;
    message.innerText = "Computer won! Rock broke scissors!";
    checkWinner();
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    computerScore++;
    computerNum.innerText = computerScore;
    message.innerText = "Computer won! Scissors cut paper!";
    checkWinner();
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    playerScore++;
    message.innerText = "Player won! Scissors cut paper!";
    playerNum.innerText = playerScore;
    checkWinner();
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    playerScore++;
    message.innerText = "Player won! Paper wrapped rock!";
    playerNum.innerText = playerScore;
    checkWinner();
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    playerScore++;
    message.innerText = "Player won! Rock broke scissors!";
    playerNum.innerText = playerScore;
    checkWinner();
  }
};

const checkWinner = () => {
  if (playerScore === 5 && playerScore > computerScore) {
    message.innerText = "Player won! Hurray!";
  }
  if (computerScore === 5 && computerScore > playerScore) {
    message.innerText = "Computer won! Computers are evolving!";
  }
};
