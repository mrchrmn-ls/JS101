function fibonacci(n) {
  if (n <= 2) return 1;

  let indexMinusOne = 1;
  let indexMinusTwo = 1;
  let current = 0;

  for (index = 3; index <= n; index += 1) {
    current = indexMinusOne + indexMinusTwo;
    indexMinusTwo = indexMinusOne;
    indexMinusOne = current;
  }

  return current;
}

console.log(fibonacci(20));