let arr = [['b', 'c', 'a'], [2, 1, 3], ['blue', 'black', 'green']];

let newArr = arr.map(element => {
  if (element.every(element => typeof element === "number")) {
    return element.slice().sort((a, b) => a - b);
  } else {
    return element.slice().sort();
  }
});

console.log(arr);

console.log(newArr);