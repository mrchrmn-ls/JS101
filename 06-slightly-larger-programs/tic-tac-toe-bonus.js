// INITIALIZATION


const rlsync = require("readline-sync");

const FIELD_SIZE = 9;
const EMPTY = " ";

const WINNING_SQUARES = [
  [1, 2, 3], [4, 5, 6], [7, 8, 9], // rows
  [1, 4, 7], [2, 5, 8], [3, 6, 9], // columns
  [1, 5, 9], [3, 5, 7]             // diagonals
];

const FIRST_PLAYER = "choose"; // possible values: human, computer, choose, random

let CONTESTANTS = {
  human: {
    symbol: "X",
    score: 0
  },
  computer: {
    symbol: "O",
    score: 0
  }
};

let board = {};


// FUNCTION
// DEFINITIONS


function joinOr(arr, delimiter = ", ", word = "or") {
  if (arr.length === 2) {
    return `${arr[0]} ${word} ${arr[1]}`;
  }

  let result = "";
  for (let index = 0; index < arr.length - 1; index += 1) {
    result += arr[index] + delimiter;
  }
  result += word + " " + arr[arr.length - 1];

  return result;
}


function getValidAnswer(allowedAnswers) {
  let answer = rlsync.question("> ").trim();

  while (!allowedAnswers.includes(answer.toLowerCase())) {
    console.log(`Please enter ${joinOr(allowedAnswers)}.`);
    answer = rlsync.question("> ").trim();
  }

  return answer;
}


function chooseControlLayout() {
  console.clear();
  console.log("Let's play Tic Tac Toe!\n");
  console.log("Please choose your control layout to place your moves:\n");
  console.log("     1  2  3                  7  8  9");
  console.log("     4  5  6        or        4  5  6");
  console.log("     7  8  9                  1  2  3\n");
  console.log("     [p]hone                  [n]umerical keypad\n");

  let layout = getValidAnswer(["p", "n"]);
  return layout;
}


function determineFirstPlayer() {
  switch (FIRST_PLAYER) {
    case "human":
      return "human";
    case "computer":
      return "computer";
    case "random":
      return Math.random() < 0.5 ? "human" : "computer";
    case "choose":
      return askForFirstPlayer();
  }
  return null;
}


function askForFirstPlayer() {
  console.clear();
  console.log("Who should go first? Chose [h]uman, [c]omputer or [r]andom.");

  let firstPlayer = getValidAnswer(["h", "c", "r"]);

  switch (firstPlayer) {
    case "h":
      return "human";
    case "c":
      return "computer";
    case "r":
      return Math.random() < 0.5 ? "human" : "computer";
  }

  return null;
}


function newBoard() {
  let board = {};
  for (let square = 1; square <= FIELD_SIZE; square += 1) {
    board[square] = EMPTY;
  }
  return board;
}


function displayBoard(layout) {
  switch (layout) {
    case "p":
      displayPhoneBoard();
      break;
    case "n":
      displayNumPadBoard();
      break;
    default:
      displayBoardNoControls();
  }
}


function displayPhoneBoard() {
  console.clear();
  console.log("Let's play Tic Tac Toe!\n");
  console.log(`You are ${CONTESTANTS.human.symbol} and the computer is ${CONTESTANTS.computer.symbol}.\n`);
  console.log(`       |       |       `);
  console.log(`   ${board[1]}   |   ${board[2]}   |   ${board[3]}          ${displayNumber(1)}   ${displayNumber(2)}   ${displayNumber(3)}`);
  console.log(`       |       |       `);
  console.log(`-------+-------+-------`);
  console.log(`       |       |`);
  console.log(`   ${board[4]}   |   ${board[5]}   |   ${board[6]}          ${displayNumber(4)}   ${displayNumber(5)}   ${displayNumber(6)}`);
  console.log(`       |       |       `);
  console.log(`-------+-------+-------`);
  console.log(`       |       |       `);
  console.log(`   ${board[7]}   |   ${board[8]}   |   ${board[9]}          ${displayNumber(7)}   ${displayNumber(8)}   ${displayNumber(9)}`);
  console.log(`       |       |       \n`);
}


function displayNumPadBoard() {
  console.clear();
  console.log("Let's play Tic Tac Toe!\n");
  console.log(`You are ${CONTESTANTS.human.symbol} and the computer is ${CONTESTANTS.computer.symbol}.\n`);
  console.log(`       |       |       `);
  console.log(`   ${board[7]}   |   ${board[8]}   |   ${board[9]}          ${displayNumber(7)}   ${displayNumber(8)}   ${displayNumber(9)}`);
  console.log(`       |       |       `);
  console.log(`-------+-------+-------`);
  console.log(`       |       |`);
  console.log(`   ${board[4]}   |   ${board[5]}   |   ${board[6]}          ${displayNumber(4)}   ${displayNumber(5)}   ${displayNumber(6)}`);
  console.log(`       |       |       `);
  console.log(`-------+-------+-------`);
  console.log(`       |       |       `);
  console.log(`   ${board[1]}   |   ${board[2]}   |   ${board[3]}          ${displayNumber(1)}   ${displayNumber(2)}   ${displayNumber(3)}`);
  console.log(`       |       |       \n`);
}


function displayBoardNoControls() {
  console.clear();
  console.log("Let's play Tic Tac Toe!\n");
  console.log(`You are ${CONTESTANTS.human.symbol} and the computer is ${CONTESTANTS.computer.symbol}.\n`);
  console.log(`       |       |       `);
  console.log(`   ${board[7]}   |   ${board[8]}   |   ${board[9]}`);
  console.log(`       |       |       `);
  console.log(`-------+-------+-------`);
  console.log(`       |       |`);
  console.log(`   ${board[4]}   |   ${board[5]}   |   ${board[6]}`);
  console.log(`       |       |       `);
  console.log(`-------+-------+-------`);
  console.log(`       |       |       `);
  console.log(`   ${board[1]}   |   ${board[2]}   |   ${board[3]}`);
  console.log(`       |       |       \n`);
}


function displayNumber(square) {
  if ((board[square] === EMPTY)) {
    return square;
  } else {
    return EMPTY;
  }
}


function emptySquares() {
  return Object.keys(board).filter(key => board[key] === EMPTY);
}


function recordMove(player) {
  switch (player) {
    case "human":
      getHumanMove();
      break;
    case "computer":
      calculateComputerMove();
  }
}


function setNextPlayer(player) {
  return (player === "human") ? "computer" : "human";
}


function getHumanMove() {
  console.log(`Pick an empty square:`);
  let square = getValidAnswer(emptySquares());
  board[square] = CONTESTANTS.human.symbol;
}


function calculateComputerMove() {
  let choice = Math.floor(emptySquares().length * Math.random());
  let square = emptySquares()[choice];
  board[square] = CONTESTANTS.computer.symbol;
}


function checkWin(player) {
  let isWinner = false;

  let symbolSquares = Object.keys(board).filter(key =>
    board[key] === CONTESTANTS[player].symbol);

  WINNING_SQUARES.forEach(arr => {
    if (arr.every(number => symbolSquares.includes(number.toString()) ) ) {
      isWinner = true;
    }
  });

  return isWinner;
}


function displayWinner(player) {
  console.log("WE HAVE A WINNER:");
  switch (player) {
    case "human":
      console.log("It's you! You have won, congratulations!\n");
      break;
    case "computer":
      console.log("Sorry, it's the computer actually.\n");
  }
}


function boardFull() {
  return emptySquares().length === 0;
}


function playAgain() {
  console.log("Do you want to play again? (y/n)");
  let input = getValidAnswer(["y", "n"]);
  return input === "y";
}


//
// MAIN
// PROGRAM
//


let layout = chooseControlLayout();

while (true) {

  board = newBoard();
  let currentPlayer = determineFirstPlayer();

  while (true) {
    displayBoard(layout);

    recordMove(currentPlayer);
    if (checkWin(currentPlayer) || boardFull()) break;

    currentPlayer = setNextPlayer(currentPlayer);
  }

  displayBoard();

  if (checkWin(currentPlayer)) {
    displayWinner(currentPlayer);
  } else if (boardFull()) {
    console.log("The board is full, there is no winner.\n");
  }

  if (playAgain()) continue;

  break;
}

console.log("\nThanks for playing!\n");