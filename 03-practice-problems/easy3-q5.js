let color = "red";

function isColorValid(color) {
  if (color === "blue" || color === "green") {
    return true;
  } else {
    return false;
  }
}

console.log(isColorValid(color));

function isColorValidA(color) {
  return (color === "blue" || color === "green");
}

console.log(isColorValidA(color));

const isColorValidB = color => color === "blue" || color === "green";

console.log(isColorValidB(color));
