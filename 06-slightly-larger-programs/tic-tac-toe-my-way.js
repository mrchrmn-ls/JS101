// INITIALIZATION


const rlsync = require("readline-sync");
const FIELD_SIZE = 9;

const SHOW_NUMBERS = true; // display numbers inside the squares?

const WINNING_SQUARES = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
  [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
  [0, 4, 8], [2, 4, 6] // diagonals
];


let board = [];
let winner = "";


// FUNCTION
// DEFINITIONS
//
// 1. Game Board
// 2. Player
// 3. Computer
// 4. Win or Tie?


// 1. Game board


function emptyBoard() {
  let board = [];
  for (let square = 0; square < FIELD_SIZE; square += 1) {
    board.push(" ");
  }
  return board;
}


function displayBoard() {
  console.clear();
  console.log(` ${squareNumber(0)}     | ${squareNumber(1)}     | ${squareNumber(2)}`);
  console.log(`   ${board[0]}   |   ${board[1]}   |   ${board[2]}`);
  console.log(`       |       |       `);
  console.log(`-------+-------+-------`);
  console.log(` ${squareNumber(3)}     | ${squareNumber(4)}     | ${squareNumber(5)}`);
  console.log(`   ${board[3]}   |   ${board[4]}   |   ${board[5]}`);
  console.log(`       |       |       `);
  console.log(`-------+-------+-------`);
  console.log(` ${squareNumber(6)}     | ${squareNumber(7)}     | ${squareNumber(8)}`);
  console.log(`   ${board[6]}   |   ${board[7]}   |   ${board[8]}`);
  console.log(`       |       |       `);
  console.log();
}


function squareNumber(square) {
  if (SHOW_NUMBERS === true) {

    if (board[square] === " ") {
      return String(square + 1);
    } else {
      return " ";
    }

  } else {
    return " ";
  }
}


function emptySquares() {
  let empties = [];
  for (let square = 0; square < FIELD_SIZE; square += 1) {
    if (board[square] === " ") {
      empties.push(square);
    }
  }
  return empties;
}


// 2. Player

function playerMove() {
  let input = rlsync.question("Enter an empty square's number\n");

  while (isValidChoice(input) !== true) {
    displayBoard();
    input = rlsync.question("Enter an EMPTY square's NUMBER\n");
  }

  board[input - 1] = "X";
}


function isValidChoice(input) {
  let number = Number(input);
  if (number !== "NaN" && emptySquares().includes(number - 1)) {
    return true;
  } else {
    return false;
  }
}


// 3. Computer

function computerMove() {
  let choice = Math.floor(emptySquares().length * Math.random());
  let square = emptySquares()[choice];
  board[square] = "O";
}


// 4. Win or tie?

function gameWon() {
  checkWin("O");
  checkWin("X");
  if (winner !== "") {
    return true;
  } else {
    return false;
  }
}


function checkWin(symbol) {
  let symbolSquares = [];

  // find all squares with the symbol
  for (let square = 0; square < FIELD_SIZE; square += 1) {
    if (board[square] === symbol) {
      symbolSquares.push(square);
    }
  }

  // check if the symbol squares include any of the winning square combinations.
  WINNING_SQUARES.forEach(arr => {
    if (arr.every(num => symbolSquares.indexOf(num) !== -1)) {
      winner = symbol;
    }
  });
}


function isTie() {
  if (emptySquares().length === 0) {
    return true;
  } else {
    return false;
  }
}


displayWinner()

//
// MAIN
// PROGRAM

board = emptyBoard();

displayBoard();

playerMove();

computerMove();

displayBoard();