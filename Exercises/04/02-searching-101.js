const rlsync = require("readline-sync");
const numbering = ["1st", "2nd", "3rd", "4th", "5th", "last"];
let numbers = [];

for (i = 0; i <= 5; i++) {
  numbers[i] = rlsync.question(`Enter the ${numbering[i]} Number: `);
}

if (numbers.slice(0,5).includes(numbers[5])) {
  console.log(`The number ${numbers[5]} appears in ${numbers.slice(0,5)}.`);
} else {
  console.log(`The number ${numbers[5]} does not in ${numbers.slice(0,5)}.`);
}