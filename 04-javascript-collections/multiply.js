function multiply(numArr, num) {
  let result = [];
  for (let index = 0; index < numArr.length; index += 1) {
    result[index] = numArr[index] * num;
  }
  return result;
}

let myNumbers = [1, 4, 3, 7, 2, 6];
console.log(multiply(myNumbers, 3)); // => [3, 12, 9, 21, 6, 18]