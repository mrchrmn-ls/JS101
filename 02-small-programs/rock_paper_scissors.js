const rlsync = require("readline-sync");
const VALID_CHOICES = ["rock", "paper", "scissors"];


// FUNCTION
// DECLARATIONS

function prompt(message) {
  console.log(`=> ${message}`);
}


function displayWinner(choice, computerChoice) {
  if ((choice === "rock" && computerChoice === "scissors") ||
      (choice === "paper" && computerChoice === "rock") ||
      (choice === "scissors" && computerChoice === "paper")) {
    prompt("You win!");
  } else if ((choice === "rock" && computerChoice === "paper") ||
             (choice === "paper" && computerChoice === "scissors") ||
             (choice === "scissors" && computerChoice === "rock")) {
    prompt("The computer wins.");
  } else {
    prompt("It's a tie.");
  }
}


// MAIN
//PROGRAM

while (true) {
  prompt(`Choose one: ${VALID_CHOICES.join(", ")}`);
  let choice = rlsync.question();

  while (!VALID_CHOICES.includes(choice)) {
    prompt("Please make a valid choice:");
    choice = rlsync.question();
  }


  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  console.log(randomIndex);
  let computerChoice = VALID_CHOICES[randomIndex];

  prompt(`You chose ${choice}, the computer chose ${computerChoice}.`);

  displayWinner(choice, computerChoice);


  prompt("Do you want to play again? (y/n)");
  let answer = rlsync.question();
  while (!["y", "n"].includes(answer.toLowerCase())) {
    prompt("Please enter 'y' or 'n'.");
    answer = rlsync.question();
  }

  if (answer === "n") break;
}