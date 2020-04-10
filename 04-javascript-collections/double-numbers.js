function doubleNumbers(numArr) {
  for (let index = 0; index < numArr.length; index += 1) {
    numArr[index] *= 2;
  }
  return numArr;
}

let myNumbers = [1, 4, 3, 7, 2, 6];
console.log(doubleNumbers(myNumbers));
console.log(myNumbers);