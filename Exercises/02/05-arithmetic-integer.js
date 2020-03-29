const rlsync = require('readline-sync');

let number1 = Number(rlsync.question("Enter the first number:\n> "));
let number2 = Number(rlsync.question("Enter the second number:\n> "));

console.log(`${number1} + ${number2} = ${number1 + number2}`);
console.log(`${number1} - ${number2} = ${number1 - number2}`);
console.log(`${number1} * ${number2} = ${number1 * number2}`);
console.log(`${number1} / ${number2} = ${number1 / number2}`);
console.log(`${number1} % ${number2} = ${number1 % number2}`);
console.log(`${number1} ** ${number2} = ${number1 ** number2}`);