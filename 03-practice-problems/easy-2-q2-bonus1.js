let numbers = [1, 2, 3, 4, 5];

const forEachReverse = arr => {
  let result = [];
  arr.forEach((element, index) => {
    result[arr.length - 1 - index] = element;
  });
  return result;
};

console.log(forEachReverse(numbers));