// INITIALIZE
// CONSTANTS AND VARIABLES

const rlsync = require("readline-sync");


const WEAPONS = { // the keys are what the player can type in
  r: "Rock",
  p: "Paper",
  ss: "Scissors",
  l: "Lizard",
  s: "Spock"
};

let weaponKeys = Object.keys(WEAPONS); // to make the code further down more readable
let weaponNames = Object.values(WEAPONS); // same here


const WINNING_COMBOS = { // the winning combinations and the appropriate verbs
  r: ["crushes", "l", "crushes", "ss"],
  p: ["covers", "r", "disproves", "s"],
  ss: ["cut", "p", "decapitate", "l"],
  l: ["poisons", "s", "eats", "p"],
  s: ["vaporizes", "r", "smashes", "ss"]
};


let playerScore = 0;
let computerScore = 0;


// FUNCTION
// EXPRESSIONS

const displayWelcome = () => {
  console.clear();
  console.log("Welcome to RPSLS!");
  console.log("The first to win five rounds wins the match!\n");
};


const displayScores = () => {
  console.log(`PLAYER  ${playerScore} : ${computerScore}  COMPUTER\n`);
};


const getPlayerChoice = () => {
  console.log(`Choose one of ${weaponNames.join(", ")}`);
  console.log(`by entering one of ${weaponKeys.join(", ")}`);
  let choice = rlsync.question("> ");

  while (!weaponKeys.includes(choice)) {
    console.log("\nPlease make a valid choice:");
    choice = rlsync.question("> ");
  }

  return choice;
};


const calculateComputerChoice = () => {
  let randomIndex = Math.floor(Math.random() * weaponKeys.length);
  return weaponKeys[randomIndex];
};


const displayChoices = (choice, compChoice) => {
  console.log(`You chose ${WEAPONS[choice]}, the computer chose ${WEAPONS[compChoice]}.\n`);
};


const beatingVerb = (winner, loser) => { // finds the verb that corresponds to the choices
  let verbIndex = WINNING_COMBOS[winner].indexOf(loser) - 1;
  return WINNING_COMBOS[winner][verbIndex];
};


const displayRoundWinner = (choice, compChoice) => {

  if (WINNING_COMBOS[choice].includes(compChoice)) {
    console.log(WEAPONS[choice] + " "
              + beatingVerb(choice, compChoice) + " "
              + WEAPONS[compChoice] + "."); // logs "A beats B"
    console.log("You win this round.\n");

  } else if (choice === compChoice) {
    console.log("This round is tied.\n");

  } else {
    console.log(WEAPONS[compChoice] + " "
              + beatingVerb(compChoice, choice) + " "
              + WEAPONS[choice] + "."); // logs "A beats B"
    console.log("The computer wins this round.\n");
  }
};


const updateScores = (choice, compChoice) => {

  if (WINNING_COMBOS[choice].includes(compChoice)) {
    playerScore += 1;
  } else if (WINNING_COMBOS[compChoice].includes(choice)) {
    computerScore += 1;
  }
};


const weHaveNoWinner = () => {
  return (playerScore < 5 && computerScore < 5);
};


const displayMatchWinner = () => {
  if (playerScore === 5) {
    console.log("\nCONGRATULATIONS!");
    console.log("You have won the match!\n\n\n");
  } else {
    console.log("\nGAME OVER!");
    console.log("Sorry, the computer won this match.\n\n\n");
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


const askForNewGame = () => {
  console.log("Do you want to play again? (y/n)");
  let playAgain = getValidAnswer();
  return playAgain;
};


const newGame = () => {
  playerScore = 0;
  computerScore = 0;
  displayWelcome();
  displayScores();
};


// MAIN
// PROGRAM

displayWelcome();
displayScores();

while (true) {

  let choice = getPlayerChoice();
  let compChoice = calculateComputerChoice();

  console.clear();

  displayChoices(choice, compChoice);
  displayRoundWinner(choice, compChoice);
  updateScores(choice, compChoice);
  displayScores();

  if (weHaveNoWinner()) continue;

  displayMatchWinner();

  if (askForNewGame() === "n") {
    console.log("\nThanks for playing.\n");
    break;
  } else {
    newGame();
  }
}