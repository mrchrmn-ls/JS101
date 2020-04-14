function multiplicativeAverage(arr) {
  let average = arr.reduce((acc, element) => acc * element, 1) / arr.length;
  return average.toFixed(3);
}

multiplicativeAverage([3, 5]);                   // "7.500"
multiplicativeAverage([2, 5, 7, 11, 13, 17]);    // "28361.667"