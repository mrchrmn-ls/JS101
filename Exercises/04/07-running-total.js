const runningTotal = arr => {
  let newArray = [];

  arr.reduce((acc, element) => {
    newArray.push(element + acc);
    return acc + element;
  }, 0);

  return newArray;
};

console.log(runningTotal([14, 11, 7, 15, 20]));
console.log(runningTotal([3]));
console.log(runningTotal([]));