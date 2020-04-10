function addUnique(val, arr) {
  if (!arr.includes(val)) {
    arr.push(val);
  }
}

function union(arr1, arr2) {
  let result = [];

  arr1.forEach(element => {
    addUnique(element, result);
  });

  arr2.forEach(element => {
    addUnique(element, result);
  });

  console.log(result.sort());

  return result.sort();
}

union([1, 3, 9], [3, 6, 5]);    // [1, 3, 5, 6, 9]