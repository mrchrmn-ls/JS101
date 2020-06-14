function binarySearch(array, searchItem) {
  let lowIndex = 0;
  let highIndex = array.length - 1;
  let midIndex = Math.floor(array.length / 2);

  while (lowIndex <= highIndex) {
    if (array[midIndex] === searchItem) {
      return midIndex;
    }

    if (array[midIndex] < searchItem) {
      lowIndex = midIndex + 1;
    } else {
      highIndex = midIndex - 1;
    }
    midIndex = lowIndex + Math.floor(highIndex - lowIndex);
  }

  return -1;
}


let yellowPages = ['Apple Store', 'Bags Galore', 'Bike Store', 'Donuts R Us', 'Eat a Lot', 'Good Food', 'Pasta Place', 'Pizzeria', 'Tiki Lounge', 'Zooper'];
console.log(binarySearch(yellowPages, 'Pizzeria'));                   // 7
console.log(binarySearch(yellowPages, 'Apple Store'));                // 0

console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 77));    // -1
console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 89));    // 7
console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 5));     // 1

console.log(binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Peter'));  // -1
console.log(binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Tyler'));  // 6
