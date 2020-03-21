const rlsync = require("readline-sync");

const MESSAGES = require("./calculator-MESSAGES.json");

// Set language according to command line argument or default to english
let LANGUAGE;
if (process.argv[2] && Object.keys(MESSAGES).includes(process.argv[2])) {
  LANGUAGE = process.argv[2];
} else {
  LANGUAGE = "EN";
}


function prompt(msgkey) {
  console.log(`=> ${MESSAGES[LANGUAGE][msgkey]}`);
}

function getNumber(num) { // asks for number and validates user input
  let key;
  switch (num) {
    case 1:
      key = "firstNumber";
      break;
    case 2:
      key = "secondNumber";
  }
  prompt(key);
  let number = rlsync.question();

  while (number.trimStart() === "" || Number.isNaN(Number(number))) {
    prompt("validNumber");
    number = rlsync.question();
  }

  return number;
}

function getOperation() { //asks for operation and validates input
  prompt("whatOperation");
  prompt("operations");
  let operation = Number(rlsync.question());

  while (![1, 2, 3, 4].includes(operation)) {
    prompt("validOperation");
    operation = Number(rlsync.question());
  }

  return operation;
}

// Initialize the continuation variable to valid setting
// as stored in the messages object. Different for each language.
let oneMoreAnswer = MESSAGES[LANGUAGE]["yesWords"][0];


// START

prompt("greeting");

while (MESSAGES[LANGUAGE]["yesWords"].includes(oneMoreAnswer)) {

  console.clear();

  let number1 = getNumber(1);
  let number2 = getNumber(2);

  let operation = getOperation();

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
  }

  console.log("=> " + MESSAGES[LANGUAGE]["result"] + output + "\n");

  prompt("oneMore");
  oneMoreAnswer = rlsync.question();
}

prompt("goodbye");