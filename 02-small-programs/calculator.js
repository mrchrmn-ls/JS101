const rlsync = require('readline-sync');

console.log('Welcome to Calculator!');

// Ask user for first number.
console.log("What's the first number?");
let number1 = Number(rlsync.question());

// Ask user for second number.
console.log("What's the second number?");
let number2 = Number(rlsync.question());

// Ask user for operation to perform.
console.log('What operation do you want to perform?\n'
  + '1) Addition 2) Subtraction 3) Multiplication 4) Division');
let operation = Number(rlsync.question());

// Calculate result.
let output;
switch (operation) {
  case 1:
    output = number1 + number2;
    break;
  case 2:
    output = number1 - number2;
    break;
  case 3:
    output = number1 * number2;
    break;
  case 4:
    output = number1 / number2;
    break;
}

// Print result to terminal.
console.log(`The result is: ${output}`);