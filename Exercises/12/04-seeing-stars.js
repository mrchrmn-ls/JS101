function printStarRow(row, n) {
  let middleSpaces = (n - 3) / 2 - row;
  let leadingSpaces = (n - 3) / 2 - middleSpaces;
  console.log(" ".repeat(leadingSpaces) + ["*", "*", "*"].join(" ".repeat(middleSpaces)));
}

function star(n) {
  let middleRow = (n - 1) / 2;

  for (let row = 0; row < middleRow; row += 1) {
    printStarRow(row, n)
  }

  console.log("*".repeat(n));

  for (let row = middleRow - 1; row >= 0; row -= 1) {
    printStarRow(row, n)
  }
}

star(9);