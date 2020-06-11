/*

Bubble sort

Input: Array
Output Array

Algorithm:
- compare element 0 and element 1
  - if element 1 is smaller that element 0, swap them
- continue with element 1 and element 2, swap if neccessary
- continue until the last two elements

- if elements are swapped set a variable to true

- if this variable is true after going through the array, do the same thing again. 

*/

function swap(i, j, array) { // destructive!
  [array[i], array[j]] = [array[j], array[i]];
}

function bubbleSort(array) {
  let swapped = false;

  do {
    swapped = false;
    for (let i = 0; i < array.length - 1; i += 1) {
      if (array[i] > array[i + 1]) {
        swap(i, i + 1, array);
        swapped = true;
      }
    }
  } while (swapped === true);
  
  return array;
}

let array1 = [5, 3];
bubbleSort(array1);
console.log(array1);    // [3, 5]

let array2 = [6, 2, 7, 1, 4];
bubbleSort(array2);
console.log(array2);    // [1, 2, 4, 6, 7]

let array3 = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
bubbleSort(array3);
console.log(array3);    // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]