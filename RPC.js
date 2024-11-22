function getComputerChoice() {
  let arr = ["rock", "paper", "scissors"];
  let PC = arr[Math.floor(Math.random() * arr.length)];
  console.log (PC)
  return PC;
}

let humanScore = 0;
let computerScore = 0;
let draw = 0;

function playRound(humanChoice, computerChoice) {
  if (humanChoice == computerChoice) {
    //user is not demanded to write an answer any more. 
    //so commented the alert massages to, to make it unique with winning or losing cases.
    // alert("It's a tie!");
    draw++;
  } else if (
    (humanChoice == "rock" && computerChoice == "scissors") ||
    (humanChoice == "scissors" && computerChoice == "paper") ||
    (humanChoice == "paper" && computerChoice == "rock")
  ) {
    // alert("You win! Congratulations!");
    humanScore++;
  } else {
    // alert("You lose, PC wins!");
    computerScore++;
  }
}


let humanSelection;
let computerSelection = getComputerChoice();

let rockBtn = document.querySelector("#rock");
let paperBtn = document.querySelector("#paper");
let scissorsBtn = document.querySelector("#scissors");

function disableButtons() {
    // Disable all buttons, not a mandatory task, but essential for the logic.
    rockBtn.disabled = true;
    paperBtn.disabled = true;
    scissorsBtn.disabled = true;
    results.textContent = (`The Final Result is :player: ${humanScore}, Computer: ${computerScore}, Draw: ${draw} `)
  }

rockBtn.addEventListener("click", () => {
    let humanSelection = "rock";
    playRound(humanSelection, getComputerChoice());
    console.log(humanScore, computerScore, draw);
    results.textContent= `The Result is : player: ${humanScore}, Computer: ${computerScore}, Draw: ${draw} `
    if (humanScore === 5) {
       alert ("Congratulations, You beat the Computer!");
       disableButtons();
    }
    else if ( computerScore === 5 ) {
        alert ("Game over, good luck next time");
        disableButtons();
    }

});
paperBtn.addEventListener("click", () => {
  let humanSelection = "paper";
  playRound(humanSelection, getComputerChoice());
  console.log(humanScore, computerScore, draw);
  results.textContent= `The Result is : player: ${humanScore}, Computer: ${computerScore}, Draw: ${draw} `
  if (humanScore === 5) {
    alert ("Congratulations, You beat the Computer!")
    disableButtons();
 }
 else if ( computerScore === 5 ) {
     alert ("Computer wins, good luck next time")
     disableButtons();
 }
});

scissorsBtn.addEventListener("click", () => {
  let humanSelection = "scissors";
  playRound(humanSelection, getComputerChoice());
  console.log(humanScore, computerScore, draw);
  results.textContent= `The Result is : player: ${humanScore}, Computer: ${computerScore}, Draw: ${draw} `
  if (humanScore === 5) {
    alert ("Congratulations, You beat the Computer!")
    disableButtons();
 }
 else if ( computerScore === 5 ) {
     alert ("Game over, good luck next time")
     disableButtons();
 }
});

let results = document.querySelector('#results');

//////////////////////////////

//comment-delete the logic that plays the game 5 times, (left as a reminder).
// function playGame() {
//   function playRound(humanChoice, computerChoice) {
//     if (humanChoice == computerChoice) {
//       alert("It's a tie!");
//       draw++;
//     } else if (
//       (humanChoice == "rock" && computerChoice == "scissors") ||
//       (humanChoice == "scissors" && computerChoice == "paper") ||
//       (humanChoice == "paper" && computerChoice == "rock")
//     ) {
//       alert("You win! Congratulations!");
//       humanScore++;
//     } else {
//       alert("You lose, PC wins!");
//       computerScore++;
//     }
//   }
//   let humanScore = 0;
//   let computerScore = 0;
//   let draw = 0;
//   for (let i = 0; i < 5; i++) {
//     const humanSelection = getHumanChoice();
//     const computerSelection = getComputerChoice();
//     playRound(humanSelection, computerSelection);
//   }
//   console.log(`Scores:\nHuman: ${humanScore}\nPC: ${computerScore}\nDraw: ${draw}`);
// }
// playGame();
