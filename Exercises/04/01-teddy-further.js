function randomBetween(num1, num2) {
  let min = num1 <= num2 ? num1 : num2;
  let max = num1 <= num2 ? num2 : num1;

  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let age = randomBetween(120, 20);
console.log(`Teddy is ${age} years old!`);