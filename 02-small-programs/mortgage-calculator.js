const rlsync = require('readline-sync');

const MESSAGES = require('./mortgage-messages.json');

// Set language according to command line argument or default to english
let LANGUAGE;
if (process.argv[2] && Object.keys(MESSAGES).includes(process.argv[2])) {
  LANGUAGE = process.argv[2];
} else {
  LANGUAGE = "EN";
}


// MAIN
// PROGRAM

console.clear();

prompt('greeting', true);

while (true) {

  console.log("------------------------------\n");

  let amount = Number(getInput('loanAmount'));
  let apr = Number(getInput('APR')) / 100; // input is in percent, but we need decimal.
  let years = Number(getInput('loanDuration'));

  let months = 12 * years;
  let aprMonthly = apr / 12;

  let monthly = monthlyPayment(amount, aprMonthly, months);

  prompt('monthlyPayment');
  console.log(MESSAGES[LANGUAGE]['currency'] + monthly.toFixed(2) + "\n");

  prompt('anotherCalculation');
  let answer = rlsync.question();
  console.log("");

  if (answer.toLowerCase()[0] !== MESSAGES[LANGUAGE]['yesLetter']) break;

}


// FUNCTION
// DECLARATIONS

function prompt(key, newline = false) {
  console.log(MESSAGES[LANGUAGE][key]);
  if (newline) console.log("");
}

function getInput(key) {
  prompt(key);
  process.stdout.write(">> ");
  let answer = rlsync.question();

  while (isInvalidNumber(answer)) {
    prompt('invalid');
    prompt(key);
    process.stdout.write(">> ");
    answer = rlsync.question();
  }

  console.log("");
  return answer;
}

function isInvalidNumber(input) {
  return (input.trimStart() === ''
          || Number.isNaN(Number(input))
          || Number(input) <= 0);
}

function monthlyPayment(amount, aprMonthly, months) {
  return (amount *
      (aprMonthly /
      (1 - Math.pow((1 + aprMonthly), (-months)))));
}