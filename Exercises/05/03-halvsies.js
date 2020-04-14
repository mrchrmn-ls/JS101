function halvsies(arr) {
  let half = Math.ceil(arr.length / 2);

  let firstArray = [];
  for (let index = 0; index < half; index += 1) {
    firstArray.push(arr[index]);
  }

  let secondArray = [];
  for (let index = half; index < arr.length; index += 1) {
    secondArray.push(arr[index]);
  }

  let result = [firstArray, secondArray];

  console.log(result);

  return result;
}

halvsies([1, 2, 3, 4]);       // [[1, 2], [3, 4]]
halvsies([1, 5, 2, 4, 3]);    // [[1, 5, 2], [4, 3]]
halvsies([5]);                // [[5], []]
halvsies([]);      