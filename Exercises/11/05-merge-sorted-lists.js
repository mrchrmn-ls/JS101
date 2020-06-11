/*Write a function that takes two sorted arrays as arguments, and returns a new array that contains all the elements from both input arrays in sorted order.

You may not provide any solution that requires you to sort the result array. You must build the result array one element at a time in the proper order.

Your solution should not mutate the input arrays.

Examples:

Input: Two arrays of numbers
Output: Array of numbers

Rules:
- no mutating the arguments
- no sorting the result

Algorithm:
- keep track of current index of argument arrays
- compare numbers at each current index
- if one is smaller or equal than the other
  - push that number to result and advance current index for that array
  - otherwise push the other number and advance THAT index.
- until at the end of each array (combined length of arguments equals result length)


Methods:
- push()


*/


function merge(array1, array2) { 
  let result = [];
  let index1 = 0;
  let index2 = 0;
  
  while (true) {
    if (index1 === array1.length && index2 === array2.length) break;
        
    if (array1[index1] <= array2[index2] || index2 === array2.length) {
      result.push(array1[index1]);
      index1 += 1;
    } else {
      result.push(array2[index2]);
      index2 += 1;
    }
  }
  
  return result;   
}


merge([1, 5, 9], [2, 6, 8]);      // [1, 2, 5, 6, 8, 9]
merge([1, 1, 3], [2, 2]);         // [1, 1, 2, 2, 3]
merge([], [1, 4, 5]);             // [1, 4, 5]
merge([1, 4, 5], []);             // [1, 4, 5]