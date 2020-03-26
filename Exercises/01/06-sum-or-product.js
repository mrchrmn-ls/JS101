const rlsync = require('readline-sync');

// FUNCTION EXPRESSIONS

const sum = num => {
  if (num === 1) {
    return 1;
  } else {
    return num + sum(num - 1);
  }
};

const factorial = num => {
  if (num === 1) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
};

const displayResult = (num, op) => {
  if (op === "s") {
    console.log(`\nThe sum of the integers between 1 and ${num} is ${sum(num)}.`);
  } else if (op === "p") {
    console.log(`\nThe product of the integers between 1 and ${num} is ${factorial(num)}.`);
  } else {
    console.log("\nUnknown operation.");
  }
};

// MAIN PROGRAM

let number = rlsync.question("Please enter an integer greater than 0: ");
let operation = rlsync.question("Enter 's' to compute the sum, or 'p' to compute the product: ");

number = parseInt(number, 10);
displayResult(number, operation);