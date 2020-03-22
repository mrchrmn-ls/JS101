const rlsync = require("readline-sync");

const MESSAGES = require("./mortgage-messages2.json");

// Set language according to command line argument or default to english
let LANGUAGE;
if (process.argv[2] && Object.keys(MESSAGES).includes(process.argv[2])) {
  LANGUAGE = process.argv[2];
} else {
  LANGUAGE = "EN";
}


// START
// MAIN PROGRAM

console.clear();

prompt("greeting", true);

while (true) {
  console.log("---------------------------------------\n");

  let amount = getInput("loanAmount");
  let apr = getInput("APR") / 100; // input is in percent, but we need decimal.
  let years = getInput("loanDuration");

  let monthly = monthlyPayment(amount, apr, years);

  displayResult(monthly, years);

  prompt("anotherCalculation");
  let answer = getValidAnswer();

  if (!answer) break;
}

// END


// FUNCTION
// DECLARATIONS

function prompt(key, newline = false) {
  console.log(MESSAGES[LANGUAGE][key]);
  if (newline) console.log("");
}


function getInput(key) {
  prompt(key);
  process.stdout.write(">> ");
  let input = rlsync.question();

  while (isInvalidNumber(input, key)) {
    prompt("invalid");
    prompt(key);
    process.stdout.write(">> ");
    input = rlsync.question();
  }

  console.log("");
  return Number(input);
}


function isInvalidNumber(input, key) {
  if (key === "loanDuration" && !Number.isInteger(Number(input) * 12)) {
    prompt("fullMonths");
    return true;
  } else {
    return (input.trimStart() === ""
            || Number.isNaN(Number(input))
            || Number(input) <= 0);
  }
}


function monthlyPayment(amount, apr, years) {
  let months = 12 * years;
  let aprMonthly = apr / 12;

  return (amount *
      (aprMonthly /
      (1 - Math.pow((1 + aprMonthly), (-months)))));
}


function displayResult (monthly, years) {
  prompt("monthlyPayment");
  console.log(MESSAGES[LANGUAGE]["currency"] + monthly.toFixed(2) +
                  " over the course of " + (years * 12) + " months.\n");
}


function getValidAnswer() {
  let answer = rlsync.question();
  console.log("");

  while (!MESSAGES[LANGUAGE]["yesNo"].includes(answer.toLowerCase())) {
    prompt("invalidAnswer");
    prompt("anotherCalculation");
    answer = rlsync.question();
    console.log("");
  }

  return answer.toLowerCase() === MESSAGES[LANGUAGE]["yesNo"][0];
}