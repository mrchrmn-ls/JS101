const rlsync = require("readline-sync");

const VALID_CHOICES = { // the keys are what the player can type in
  r: "Rock",
  p: "Paper",
  ss: "Scissors",
  l: "Lizard",
  s: "Spock"
};

let choiceKeys = Object.keys(VALID_CHOICES); // to make the code further down more readable
let choiceValues = Object.values(VALID_CHOICES); // same here

const WINNING_COMBOS = { // the winning combinations and the appropriate verbs
  r: ["crushes", "l", "crushes", "ss"],
  p: ["covers", "r", "disproves", "s"],
  ss: ["cut", "p", "decapitate", "l"],
  l: ["poisons", "s", "eats", "p"],
  s: ["vaporizes", "r", "smashes", "ss"]
};


// FUNCTION
// DECLARATIONS

const playerChoice = () => {
  console.log(`Choose one of ${choiceValues.join(", ")}`);
  console.log(`by pressing one of ${choiceKeys.join(", ")}`);
  let choice = rlsync.question("> ");

  while (!choiceKeys.includes(choice)) {
    console.log("\nPlease make a valid choice:");
    choice = rlsync.question("> ");
  }

  return choice;
};


const computerChoice = () => {
  let randomIndex = Math.floor(Math.random() * choiceKeys.length);
  return choiceKeys[randomIndex];
};


const beatingVerb = (winner, loser) => {
  let verbIndex = WINNING_COMBOS[winner].indexOf(loser) - 1;
  return WINNING_COMBOS[winner][verbIndex];
};


const displayWinner = (choice, compChoice) => {

  if (WINNING_COMBOS[choice].includes(compChoice)) {
    console.log("You win because " + VALID_CHOICES[choice] + " " +
                                     beatingVerb(choice, compChoice) + " " +
                                     VALID_CHOICES[compChoice] + ".\n"); // logs "... because A beats B"

  } else if (choice === compChoice) {
    console.log("It's a tie.\n");

  } else {
    console.log("The computer wins because " + VALID_CHOICES[compChoice] + " " +
                                               beatingVerb(compChoice, choice) + " " +
                                               VALID_CHOICES[choice] + ".\n"); // logs "... because A beats B"
  }
};


const getValidAnswer = () => {
  let answer = rlsync.question();

  while (!["y", "n"].includes(answer.toLowerCase())) {
    console.log("Please enter 'y' or 'n'.");
    answer = rlsync.question();
  }

  return answer;
};

// MAIN
//PROGRAM

while (true) {
  console.clear();

  let choice = playerChoice();
  let compChoice = computerChoice();
  console.log(`\nYou chose ${VALID_CHOICES[choice]}, the computer chose ${VALID_CHOICES[compChoice]}.`);

  displayWinner(choice, compChoice);

  console.log("Do you want to play again? (y/n)");
  let playAgain = getValidAnswer();
  if (playAgain === "n") {
    console.log("Thanks for playing.\n");
    break;
  }
}