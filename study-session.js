/*
// You are going to be given an array of integers. 
Your job is to take that array and find an index N where 
the sum of the integers to the left of N is equal to the sum 
of the integers to the right of N. 
If there is no index that would make this happen, return -1.

// For example:

// Let's say you are given the array [1,2,3,4,3,2,1]:
// Your function will return the index 3, because at the 3rd position of 
the array, the sum of left side of the index [1,2,3] and the sum of the right side of the index [3,2,1] both equal 6.

// Another one:
// You are given the array [20,10,-80,10,10,15,35]
// At index 0 the left side is []
// The right side is [10,-80,10,10,15,35]
// They both are equal to 0 when added. (Empty arrays are equal to 0 in this problem)
// Index 0 is the place where the left side and right side are equal.

console.log(findEvenIndex([1,2,3,4,3,2,1]) === 3); // true
console.log(findEvenIndex([1,100,50,-51,1,1]) === 1); // true
console.log(findEvenIndex([1,2,3,4,5,6]) === -1); // true
console.log(findEvenIndex([20,10,30,10,10,15,35]) === 3); // true
console.log(findEvenIndex([20,10,-80,10,10,15,35]) === 0); // true
console.log(findEvenIndex([10,-80,10,10,15,35,20]) === 6); // true
console.log(findEvenIndex([-1,-2,-3,-4,-3,-2,-1]) === 3); // true


Input: Array
Output: Number

Observation from the examples: The current index is not included in the sums. 

Algorithm: 
Go through indices from first to last
  - At each index
    - calculate the sum of the left subarray
    - calculate the sum of the right subarray
    - compare sums
      - if sums are equal, return current index
      - otherwise try the next index
If not even at the last index a solution is found, return -1

Coding bits and methods:
- for loop to go through array
- slice to create subarrays
- reduce to calculate sums


*/

function arraySum(arr) {
  return arr.reduce((acc, elem) => acc + elem, 0);
}

function findEvenIndex(array) {
  for (let i = 0; i < array.length; i+= 1) {
    if (arraySum(array.slice(0, i)) === arraySum(array.slice(i + 1))) {
      return i;
    }
  }
  return -1;
}

console.log(findEvenIndex([1,2,3,4,3,2,1]) === 3); // true
console.log(findEvenIndex([1,100,50,-51,1,1]) === 1); // true
console.log(findEvenIndex([1,2,3,4,5,6]) === -1); // true
console.log(findEvenIndex([20,10,30,10,10,15,35]) === 3); // true
console.log(findEvenIndex([20,10,-80,10,10,15,35]) === 0); // true
console.log(findEvenIndex([10,-80,10,10,15,35,20]) === 6); // true
console.log(findEvenIndex([-1,-2,-3,-4,-3,-2,-1]) === 3); // true
