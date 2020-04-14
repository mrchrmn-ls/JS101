// INITIALIZATION


const rlsync = require("readline-sync");

const FIELD_SIZE = 9;
const EMPTY = " ";
const PLAYER_SYMBOL = "X";
const COMPUTER_SYMBOL = "O";

const WINNING_SQUARES = [
  [1, 2, 3], [4, 5, 6], [7, 8, 9], // rows
  [1, 4, 7], [2, 5, 8], [3, 6, 9], // columns
  [1, 5, 9], [3, 5, 7]             // diagonals
];


let board = {};
let winner = "";


// FUNCTION
// DEFINITIONS


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
  }
}


function displayPhoneBoard() {
  console.clear();
  console.log("Let's play Tic Tac Toe!\n");
  console.log(`You are ${PLAYER_SYMBOL} and the computer is ${COMPUTER_SYMBOL}.\n`);
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
  console.log(`You are ${PLAYER_SYMBOL} and the computer is ${COMPUTER_SYMBOL}.\n`);
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


function displayNumber(square) {
  // only show the number when the square is empty and the game is still going
  if ((board[square] === EMPTY) && winner === "") {
    return square;
  } else {
    return EMPTY;
  }
}


function emptySquares() {
  return Object.keys(board).filter(key => board[key] === EMPTY);
}


function joinOr(arr, delimiter = ", ", word = "or") {
  if (arr.length === 2) {
    return arr[0] + " " + word + " " + arr[1];
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


function getPlayerMove() {
  console.log(`Pick an empty square:`);
  let square = getValidAnswer(emptySquares());
  board[square] = PLAYER_SYMBOL;
}


function calculateComputerMove() {
  let choice = Math.floor(emptySquares().length * Math.random());
  let square = emptySquares()[choice];
  board[square] = COMPUTER_SYMBOL;
}


function gameWon() {
  checkWin(COMPUTER_SYMBOL);
  checkWin(PLAYER_SYMBOL);
  return winner !== "";
}


function checkWin(symbol) {

  let symbolSquares = Object.keys(board).filter(key => board[key] === symbol);

  WINNING_SQUARES.forEach(arr => {
    if (arr.every(number => symbolSquares.includes(number.toString()) ) ) {
      winner = symbol;
    }
  });
}


function displayWinner() {
  console.log("WE HAVE A WINNER:");
  switch (winner) {
    case PLAYER_SYMBOL:
      console.log("It's you! You have won, congratulations!\n");
      break;
    case COMPUTER_SYMBOL:
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
  winner = "";
  displayBoard(layout);


  while (true) {
    getPlayerMove();
    if (gameWon() || boardFull()) break;

    calculateComputerMove();
    if (gameWon() || boardFull()) break;

    displayBoard(layout);
  }


  displayBoard(layout);

  if (gameWon()) {
    displayWinner();
  } else if (boardFull()) {
    console.log("The board is full, there is no winner.\n");
  }

  if (playAgain()) continue;

  break;
}

console.log("\nThanks for playing!\n");