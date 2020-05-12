function multiplyAllPairs(arrayA, arrayB) {
  let result = [];

  for (let i = 0; i < arrayA.length; i += 1) {
    for (let j = 0; j < arrayB.length; j += 1) {
      result.push(arrayA[i] * arrayB[j]);
    }
  }

  return result.sort((a, b) => a - b);
}

console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2]));