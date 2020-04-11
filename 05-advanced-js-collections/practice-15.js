let arr = [
  { a: [1, 2, 3] },
  { b: [2, 4, 6], c: [8, 6], d: [4] },
  { e: [8], f: [6, 10] },
];

function isAllEven(obj) {
  return Object.values(obj).every(subArr => subArr.every(num => num % 2 === 0));
}

let newArr = [];

arr.forEach(obj => {
  if (isAllEven(obj)) {
    newArr.push(obj);
  }
});

console.log(newArr);