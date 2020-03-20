const rlsync = require('readline-sync');

const messages = require('./calculator-messages-EN.json');

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

prompt(messages['greeting']);

let anotherCalculation = messages['yes'][0];

while (messages['yes'].includes(anotherCalculation)) {

  // Ask user for first number.
  prompt(messages['firstNumber']);
  let number1 = rlsync.question();

  while (invalidNumber(number1)) {
    prompt(messages['validNumber']);
    number1 = rlsync.question();
  }


  // Ask user for second number.
  prompt(messages['secondNumber']);
  let number2 = rlsync.question();

  while (invalidNumber(number2)) {
    prompt(messages['validNumber']);
    number2 = rlsync.question();
  }


  // Ask user for operation to perform.
  prompt(messages['whatOperation']);
  prompt(messages['operations']);
  let operation = Number(rlsync.question());

  while (![1, 2, 3, 4].includes(operation)) {
    prompt(messages['validOperation']);
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
  prompt(messages['result'] + output);
  prompt(messages['oneMore']);
  anotherCalculation = rlsync.question();

}