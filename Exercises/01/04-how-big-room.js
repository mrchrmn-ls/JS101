const rlsync = require("readline-sync");

const SQM_TO_SQFT = 10.7639;

const UNITS = {
  m: "metres",
  ft: "feet"
};

// MAIN

let chosenUnit = rlsync.question("Square metres or square feet? Type 'm' or 'ft'\n");

let length = rlsync.question("Enter the length of the room in " + UNITS[chosenUnit] + ":\n");
length = Number(length);

let width = rlsync.question("Enter the width of the room in " + UNITS[chosenUnit] + ":\n");
width = Number(width);

let area = (length * width).toFixed(2);
let convertedArea = convert(area, chosenUnit).toFixed(2);
let convertedUnit = convertUnit(chosenUnit);

console.log(`The area of the room is ${area} square ${UNITS[chosenUnit]} (${convertedArea} square ${UNITS[convertedUnit]}).`);


// FUNCTION DECLARATIONS

function convert(area, unit) {
  switch (unit) {
    case "ft":
      return area / SQM_TO_SQFT;
    case "m":
      return area * SQM_TO_SQFT;
  }
  return 0;
}

function convertUnit(unit) {
  switch (unit) {
    case "ft":
      return "m";
    case "m":
      return "ft";
  }
  return 0;
}