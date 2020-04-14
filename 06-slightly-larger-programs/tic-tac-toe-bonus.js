// INITIALIZATION


const rlsync = require("readline-sync");

const FIELD_SIZE = 9;
const EMPTY = " ";
const GAMES_TO_WIN = 3;

const WINNING_SQUARES = [
  [1, 2, 3], [4, 5, 6], [7, 8, 9], // rows
  [1, 4, 7], [2, 5, 8], [3, 6, 9], // columns
  [1, 5, 9], [3, 5, 7]             // diagonals
];

const FIRST_PLAYER = "choose"; // possible values: human, computer, choose, random

const CONTESTANTS = {
  human: {
    symbol: "X",
  },
  computer: {
    symbol: "O",
  }
};


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
  console.log("     7  8  9                  1  2  3");
  console.log("     4  5  6        or        4  5  6");
  console.log("     1  2  3                  7  8  9\n");
  console.log("[n]umerical keypad            [p]hone\n");

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
  console.log("Let's play Tic Tac Toe!\n");
  console.log("Who should begin the first game? Chose [h]uman, [c]omputer or [r]andom.");

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


function displayBoard(board, layout, gameNumber, scores) {
  console.clear();
  console.log("Let's play Tic Tac Toe!\n");
  displayScores(gameNumber, scores);
  console.log(`          |       |       `);
  console.log(layout === "p" ? display123row(board, layout) : display789row(board, layout));
  console.log(`          |       |       `);
  console.log(`   -------+-------+-------`);
  console.log(`          |       |`);
  console.log(`      ${board[4]}   |   ${board[5]}   |   ${board[6]}          ${displayNumber(board, 4, layout)}   ${displayNumber(board, 5, layout)}   ${displayNumber(board, 6, layout)}`);
  console.log(`          |       |       `);
  console.log(`   -------+-------+-------`);
  console.log(`          |       |       `);
  console.log(layout === "n" ? display123row(board, layout) : display789row(board, layout));
  console.log(`          |       |       \n`);
}

function display123row(board, layout) {
  return `      ${board[1]}   |   ${board[2]}   |   ${board[3]}          ${displayNumber(board, 1, layout)}   ${displayNumber(board, 2, layout)}   ${displayNumber(board, 3, layout)}`;
}

function display789row(board, layout) {
  return `      ${board[7]}   |   ${board[8]}   |   ${board[9]}          ${displayNumber(board, 7, layout)}   ${displayNumber(board, 8, layout)}   ${displayNumber(board, 9, layout)}`;
}


function displayNumber(board, square, layout) {
  if ((board[square] === EMPTY) && (layout !== "no controls")) {
    return square;
  } else {
    return EMPTY;
  }
}


function displayScores(gameNumber, scores) {
  console.log(`This is game ${gameNumber}. The first to reach ${GAMES_TO_WIN} points wins.\n`);
  console.log(`HUMAN (${CONTESTANTS.human.symbol})   ${scores[0]} : ${scores[1]}   (${CONTESTANTS.computer.symbol}) COMPUTER \n`);
}


function emptySquares(board) {
  return Object.keys(board).filter(key => board[key] === EMPTY);
}


function recordMove(board, player) {
  switch (player) {
    case "human":
      getHumanMove(board);
      break;
    case "computer":
      calculateComputerMove(board);
  }
}


function getHumanMove(board) {
  console.log(`Pick an empty square:`);
  let square = getValidAnswer(emptySquares(board));
  board[square] = CONTESTANTS.human.symbol;
}


function calculateComputerMove(board) {
  let square = emptySquares(board)[
                 Math.floor(emptySquares(board).length * Math.random())
               ];

  if (emptySquares(board).includes("5")) {
    square = "5";
  }

  if (winningMoveFound(board, "human")) {
    square = winningMoveFound(board, "human");
  }

  if (winningMoveFound(board, "computer")) {
    square = winningMoveFound(board, "computer");
  }

  board[square] = CONTESTANTS.computer.symbol;
}


function winningMoveFound(board, player) {
  let testBoard = Object.assign({}, board);

  for (let index = 0; index < emptySquares(board).length; index += 1) {
    testBoard[emptySquares(board)[index]] = CONTESTANTS[player].symbol;

    if (isWinner(testBoard, player)) {
      return emptySquares(board)[index];

    } else {
      testBoard = Object.assign({}, board);
    }
  }

  return false;
}


function isWinner(board, player) {
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


function setNextPlayer(player) {
  return (player === "human") ? "computer" : "human";
}


function boardFull(board) {
  return emptySquares(board).length === 0;
}


function displayWinner(player) {
  switch (player) {
    case "human":
      console.log("You have won this game.\n");
      break;
    case "computer":
      console.log("The computer won this game.\n");
  }
}


function updateScores(scores, currentPlayer) {
  switch (currentPlayer) {
    case "human":
      scores[0] += 1;
      break;
    case "computer":
      scores[1] += 1;
  }
}


function displayMatchWinner(scores) {
  let matchWinner = (scores[0] > scores[1]) ? "human" : "computer";

  switch (matchWinner) {
    case "human":
      console.log("CONGRATULATIONS!\nYou have won the match!\n");
      break;
    case "computer":
      console.log("SORRY,\nbut the computer won this match.\n");
  }
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
let currentPlayer = determineFirstPlayer();

while (true) { // match

  let scores = [0, 0];
  let gameNumber = 1;

  while (true) { // game

    let board = newBoard();

    while (true) { // moves
      displayBoard(board, layout, gameNumber, scores);
      recordMove(board, currentPlayer);

      if (isWinner(board, currentPlayer) || boardFull(board)) break;

      currentPlayer = setNextPlayer(currentPlayer);
    }

    displayBoard(board, "no controls", gameNumber, scores);

    if (isWinner(board, currentPlayer)) {
      displayWinner(currentPlayer);
      updateScores(scores, currentPlayer);

    } else if (boardFull(board)) {
      console.log("The board is full, nobody won this game.\n");

    }

    if (Math.max(...scores) < GAMES_TO_WIN) {
      gameNumber += 1;
      currentPlayer = setNextPlayer(currentPlayer);
      rlsync.question("Press Enter to proceed to the next round.");
      continue;

    } else {
      displayBoard(board, "no controls", gameNumber, scores);
      displayMatchWinner(scores);

    }

    break;
  }

  if (playAgain()) continue;

  break;
}

console.log("\nThanks for playing!\n");