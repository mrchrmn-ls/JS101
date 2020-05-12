function sumOfSums(arr) {
  return arr.map((_, index) => arr.slice(0, index + 1)
                                           .reduce((acc, num) => acc + num, 0))
            .reduce((acc, num) => acc + num, 0);
}

console.log(sumOfSums([1, 5, 7, 3]));