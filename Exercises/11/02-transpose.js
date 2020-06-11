function transpose(matrix) {
  let transposed = Array(matrix[0].length).fill(0).map(_ => Array(matrix.length));

  for (let y = 0; y < matrix.length; y += 1) {
    for (let x = 0; x < matrix[0].length; x += 1) {
      transposed[x][y] = matrix[y][x];
    }
  }

  return transposed;
}

let matrix = [
  [18, 44, 234]
];

let newMatrix = transpose(matrix);

console.log(matrix);         // [[1, 5, 8], [4, 7, 2], [3, 9, 6]]
console.log(newMatrix);      // [[1, 4, 3], [5, 7, 9], [8, 2, 6]]
