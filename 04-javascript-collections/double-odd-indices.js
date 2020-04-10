function doubleOddIndices(numArr) {
  for (index = 1; index < numArr.length; index += 2) {
    numArr *= 2;
  }

  return numArr;
}