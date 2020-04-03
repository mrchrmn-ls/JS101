const rlsync = require("readline-sync");

let age = rlsync.question("What is your age? ");
let retirement = rlsync.question("At what age would you like to retire? ");
let yearsToGo = Number(retirement) - Number(age);

let today = new Date();
let thisYear = today.getFullYear();
let retirementYear = thisYear + yearsToGo;

console.log(`It's ${thisYear}. You will retire in ${retirementYear}.`)
console.log(`You have only ${yearsToGo} years of work to go!`);