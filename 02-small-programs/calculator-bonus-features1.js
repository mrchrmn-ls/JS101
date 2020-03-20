const rlsync = require('readline-sync');

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

prompt('Welcome to Calculator!');

let anotherCalculation = 'y';

while (['Y', 'y', 'Yes', 'yes'].includes(anotherCalculation)) {

  // Ask user for first number.
  prompt("What's the first number?");
  let number1 = rlsync.question();

  while (invalidNumber(number1)) {
    prompt("Please enter a valid number.");
    number1 = rlsync.question();
  }


  // Ask user for second number.
  prompt("What's the second number?");
  let number2 = rlsync.question();

  while (invalidNumber(number2)) {
    prompt("Please enter a valid number.");
    number2 = rlsync.question();
  }


  // Ask user for operation to perform.
  prompt('What operation do you want to perform?');
  prompt('1) Addition 2) Subtraction 3) Multiplication 4) Division');
  let operation = Number(rlsync.question());

  while (![1, 2, 3, 4].includes(operation)) {
    prompt("Please choose a valid operation.");
    operation = Number(rlsync.question());
  }

  // Calculate result.
  let output;
  switch (operation) {
    case 1:
      output = Number(number1) + Number(number2);
      break;
    case 2:
      output = Number(number1) - Number(number2);
      break;
    case 3:
      output = Number(number1) * Number(number2);
      break;
    case 4:
      output = Number(number1) / Number(number2);
      break;
  }

  // Print result to terminal and ask for another round
  prompt(`The result is: ${output}`);
  console.log('\n');
  prompt('Would you like to perform another calculation? (y / n)');
  anotherCalculation = rlsync.question();

}