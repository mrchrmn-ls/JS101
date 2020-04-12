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
//
// 1. Game Board
// 2. Player
// 3. Computer
// 4. Win or Tie?


// 1. Game board

function newBoard() {
  let board = {};
  for (let square = 1; square <= FIELD_SIZE; square += 1) {
    board[square] = EMPTY;
  }
  return board;
}


function displayBoard() {
  console.clear();
  console.log("Let's play Tic Tac Toe!\n");
  console.log(`You are ${PLAYER_SYMBOL} <- and the computer is ${COMPUTER_SYMBOL}.\n`);
  console.log(`       |       |       `);
  console.log(`   ${board[7]}   |   ${board[8]}   |   ${board[9]}          ${squareNumber(7)}   ${squareNumber(8)}   ${squareNumber(9)}`);
  console.log(`       |       |       `);
  console.log(`-------+-------+-------`);
  console.log(`       |       |`);
  console.log(`   ${board[4]}   |   ${board[5]}   |   ${board[6]}          ${squareNumber(4)}   ${squareNumber(5)}   ${squareNumber(6)}`);
  console.log(`       |       |       `);
  console.log(`-------+-------+-------`);
  console.log(`       |       |       `);
  console.log(`   ${board[1]}   |   ${board[2]}   |   ${board[3]}          ${squareNumber(1)}   ${squareNumber(2)}   ${squareNumber(3)}`);
  console.log(`       |       |       \n`);
}


function squareNumber(square) {
  if ((board[square] === EMPTY) && winner === "") { // only show numbers when game is still going
    return square;
  } else {
    return EMPTY;
  }
}


function emptySquares() {
  return Object.keys(board).filter(key => board[key] === EMPTY);
}


// 2. Player

function getPlayerMove() {
  console.log(`Pick an empty square:`);
  let square = getValidSquare();
  board[square] = PLAYER_SYMBOL;
}


function getValidSquare() {
  let answer = rlsync.question("> ").trim();

  while (!emptySquares().includes(answer)) {
    displayBoard();
    console.log(`Please enter an EMPTY square's NUMBER:`);
    answer = rlsync.question("> ").trim();
  }

  return answer;
}


// 3. Computer

function calculateComputerMove() {
  let choice = Math.floor(emptySquares().length * Math.random());
  let square = emptySquares()[choice];
  board[square] = COMPUTER_SYMBOL;
}


// 4. Win or tie?

function gameWon() {
  checkWin(COMPUTER_SYMBOL);
  checkWin(PLAYER_SYMBOL);
  if (winner !== "") {
    return true;
  } else {
    return false;
  }
}


function checkWin(symbol) {

  // create array of all square with the symbol
  let symbolSquares = Object.keys(board).filter(key => board[key] === symbol);

  // check if symbolSquares includes any of the winning square combinations
  WINNING_SQUARES.forEach(arr => {
    if (arr.every(number => symbolSquares.indexOf(number.toString()) !== -1)) {
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
  if (emptySquares().length === 0) {
    return true;
  } else {
    return false;
  }
}


function playAgain() {
  console.log("Do you want to play again? (y/n)");
  let input = getValidAnswer();

  if (input === "y") {
    return true;
  } else {
    return false;
  }

}


function getValidAnswer() {
  let answer = rlsync.question("> ");

  while (!["y", "n"].includes(answer.toLowerCase())) {
    console.log("Please enter 'y' or 'n'.");
    answer = rlsync.question("> ");
  }

  return answer;
}


//
// MAIN
// PROGRAM
//


while (true) {

  board = newBoard();
  winner = "";
  displayBoard();

  // moves loop

  while (true) {
    getPlayerMove();
    if (gameWon() || boardFull()) break;

    calculateComputerMove();
    if (gameWon() || boardFull()) break;

    displayBoard();
  }

  // game over

  if (gameWon()) {
    displayBoard();
    displayWinner();
  } else if (boardFull()) {
    displayBoard();
    console.log("The board is full, there is no winner.\n");
  }

  if (playAgain()) continue;

  break;
}

console.log("\nThanks for playing!\n");