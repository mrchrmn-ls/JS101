function binarySearch(array, searchItem) {
  console.log(array);
  middleIndex = Math.floor(array.length / 2);

  if (array[middleIndex] === searchItem) {
    console.log("Found it!");
    return 0;
  }

  if (array.length === 1) {
    console.log("Not found!");
    return -1;
  }
  
  if (String(array[middleIndex]) > searchItem) {
    binarySearch(array.slice(0, middleIndex), searchItem);
  } else {
    binarySearch(array.slice(middleIndex), searchItem);
  } 

}


let yellowPages = ['Apple Store', 'Bags Galore', 'Bike Store', 'Donuts R Us', 'Eat a Lot', 'Good Food', 'Pasta Place', 'Pizzeria', 'Tiki Lounge', 'Zooper'];
binarySearch(yellowPages, 'Pizzeria');                   // 7
binarySearch(yellowPages, 'Apple Store');                // 0

binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 77);    // -1
binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 89);    // 7
binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 5);     // 1

binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Peter');  // -1
binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Tyler');  // 6
