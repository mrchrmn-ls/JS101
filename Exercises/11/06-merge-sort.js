function merge(left, right) { 
  let merged = [];
  let leftIndex = 0;
  let rightIndex = 0;
  
  while (true) {
    if (leftIndex === left.length && rightIndex === right.length) break;
        
    if (left[leftIndex] <= right[rightIndex] || rightIndex === right.length) {
      merged.push(left[leftIndex]);
      leftIndex += 1;
    } else {
      merged.push(right[rightIndex]);
      rightIndex += 1;
    }
  }
  
  return merged;   
}

function mergeSort(array) {
  if (array.length === 1) {
    return array;
  } 

  let left = array.slice(0, array.length / 2);
  let right = array.slice(array.length / 2);
  return merge(mergeSort(left), mergeSort(right));
}

console.log(mergeSort([9, 5, 7, 1]));           // [1, 5, 7, 9]
console.log(mergeSort([5, 3]));                 // [3, 5]
console.log(mergeSort([6, 2, 7, 1, 4]));        // [1, 2, 4, 6, 7]

console.log(mergeSort(['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie']));
// ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]

console.log(mergeSort([7, 3, 9, 15, 23, 1, 6, 51, 22, 37, 54, 43, 5, 25, 35, 18, 46]));
// [1, 3, 5, 6, 7, 9, 15, 18, 22, 23, 25, 35, 37, 43, 46, 51, 54]