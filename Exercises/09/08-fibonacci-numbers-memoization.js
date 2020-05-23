let fibs = {
  1: 1,
  2: 1
};

function fibonacci(n) {
  if (n <= 2) {
    return 1;
  } else if (fibs[n]) {
    return fibs[n];
  } else {
    fibs[n] = fibonacci(n - 1) + fibonacci(n - 2);
    return fibs[n];
  }
}

console.log(fibonacci(10));