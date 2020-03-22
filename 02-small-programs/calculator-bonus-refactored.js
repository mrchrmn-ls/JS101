const rlsync = require("readline-sync");

const MESSAGES = require("./calculator-messages-refactored.json");

// Set language according to command line argument or default to english
let LANGUAGE;
if (process.argv[2] && Object.keys(MESSAGES).includes(process.argv[2])) {
  LANGUAGE = process.argv[2];
} else {
  LANGUAGE = "EN";
}


// MAIN
// PROGRAM

prompt("greeting");

while (true) {

  console.clear();

  let number1 = getNumber("firstNumber");
  let number2 = getNumber("secondNumber");

  let operation = getOperation();

  let result = calculate(number1, number2, operation);

  console.log("=> " + MESSAGES[LANGUAGE]["result"] + result + "\n");

  prompt("oneMore");
  let oneMoreAnswer = rlsync.question();

  if (isNotYes(oneMoreAnswer)) break;
}

prompt("goodbye");


// FUNCTION
// DECLARATIONS

function prompt(msgkey) {
  console.log(`=> ${MESSAGES[LANGUAGE][msgkey]}`);
}


function getNumber(key) { // asks for number and validates user input
  prompt(key);
  let number = rlsync.question();

  while (invalidNumber(number)) {
    prompt("validNumber");
    number = rlsync.question();
  }

  return number;
}


function invalidNumber(num) {
  return num.trimStart() === "" || Number.isNaN(Number(num));
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


function calculate(number1, number2, operation) {
  switch (operation) {
    case 1:
      return Number(number1) + Number(number2);
    case 2:
      return Number(number1) - Number(number2);
    case 3:
      return Number(number1) * Number(number2);
    case 4:
      return Number(number1) / Number(number2);
  }
  return 0;
}


function isNotYes(answer) {
  return answer.toLowerCase()[0] !== MESSAGES[LANGUAGE]["yesLetter"];
}