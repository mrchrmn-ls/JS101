let arr = [['b', 'c', 'a'], [2, 1, 3], ['blue', 'black', 'green']];

let newArr = arr.map(element => {
  if (element.every(element => typeof element === "number")) {
    return element.slice().sort((a, b) => b - a);
  } else {
    return element.slice().sort((a, b) => {
      if (a < b) {
        return 1;
      } else if (a > b) {
        return -1;
      } else {
        return 0;
      }
    });
  }
});

console.log(arr);

console.log(newArr);