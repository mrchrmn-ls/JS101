const findFibonacciIndexByLength = int => {
  let index = 2;
  let previous = 1;
  let current = 1;

  while (current <= 10 ** (int - 1)) {
    let newFibonacci = current + previous;
    previous = current;
    current = newFibonacci;
    index += 1;
  }

  return index;
};

findFibonacciIndexByLength(2);       // 7
findFibonacciIndexByLength(10);      // 45
findFibonacciIndexByLength(16);      // 74