function getComputerChoice() {
  let arr = ["rock", "paper", "scissors"];
  let PC = arr[Math.floor(Math.random() * arr.length)];
  return PC;
}
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

function playGame () {
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
  let humanScore = 0;
  let computerScore = 0;
  for (let i =0; i <5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection , computerSelection)
  }``
  console.log(`Scores:\nHuman: ${humanScore}\nPC: ${computerScore}`);
}
playGame();
