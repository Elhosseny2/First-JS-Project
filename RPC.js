function getComputerChoice() {
  let arr = ["rock", "paper", "scissors"];
  let PC = arr[Math.floor(Math.random() * arr.length)];
  return PC;
}
console.log(getComputerChoice());

function getHumanChoice() {
  let ans = prompt("Choose a Symbol: rock, paper, or scissors").toLowerCase();
  while (true) {
    if (ans == "rock" || ans == "paper" || ans == "scissors") {
      break;
    } else {
      ans = prompt(
        "Invalid symbol, try again: rock, paper, or scissors"
      ).toLowerCase();
    }
  }
  return ans;
}
let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  if (humanChoice == computerChoice) {
    alert("It's a tie!");
  } else if (
    (humanChoice == "rock" && computerChoice == "scissors") ||
    (humanChoice == "scissors" && computerChoice == "paper") ||
    (humanChoice == "paper" && computerChoice == "rock")
  ) {
    alert("You win! Congratulations!");
    humanScore++;
  } else {
    alert("You lose, PC wins!");
    computerScore++;
  }
}
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
playRound(humanSelection, computerSelection);
alert(`Scores:\nHuman: ${humanScore}\nPC: ${computerScore}`);