const rlsync = require('readline-sync');

// Load localized messages and set language
const MESSAGES = require('./calculator-MESSAGES.json');
const LANGUAGE = 'DE'

// Helper function to avoid the nested array in some places
function prompt(key) {
  let message = MESSAGES[LANGUAGE][key];
  console.log(`=> ${message}`);
}

// Function to test for valid numerical input
function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}


prompt('greeting');

// Initialize the continuation variable to valid setting 
// as stored in the messages object. Different for each language.
let oneMoreAnswer = MESSAGES[LANGUAGE]['yesWords'][0];

while (MESSAGES[LANGUAGE]['yesWords'].includes(oneMoreAnswer)) {

  console.clear();

  // Ask user for first number.
  prompt('firstNumber');
  let number1 = rlsync.question();

  while (invalidNumber(number1)) {
    prompt('validNumber');
    number1 = rlsync.question();
  }


  // Ask user for second number.
  prompt('secondNumber');
  let number2 = rlsync.question();

  while (invalidNumber(number2)) {
    prompt('validNumber');
    number2 = rlsync.question();
  }


  // Ask user for operation to perform.
  prompt('whatOperation');
  prompt('operations');
  let operation = Number(rlsync.question());

  while (![1, 2, 3, 4].includes(operation)) {
    prompt('validOperation');
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
  console.log('=> ' + MESSAGES[LANGUAGE]['result'] + output);
  prompt('oneMore');
  oneMoreAnswer = rlsync.question();

}