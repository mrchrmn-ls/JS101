/*
Write a function that rotates an array by moving the first element to the end of the array. Do not modify the original array.

If the input is not an array, return undefined.
If the input is an empty array, return an empty array.
Review the test cases below, then implement the solution accordingly.

rotateArray([7, 3, 5, 2, 9, 1]);       // [3, 5, 2, 9, 1, 7]
rotateArray(['a', 'b', 'c']);          // ["b", "c", "a"]
rotateArray(['a']);                    // ["a"]
rotateArray([1, 'a', 3, 'c']);         // ["a", 3, "c", 1]
rotateArray([{ a: 2 }, [1, 2], 3]);    // [[1, 2], 3, { a: 2 }]
rotateArray([]);                       // []

-- return `undefined` if the argument is not an array
rotateArray();                         // undefined
rotateArray(1);                        // undefined


-- the input array is not mutated
let array = [1, 2, 3, 4];
rotateArray(array);                    // [2, 3, 4, 1]
array;                                 // [1, 2, 3, 4]

Input: Array
Output: Array
Rules: Don't mutate the argument.

Algorithm:
- Check if argument is an array. Return undefined it isn't.
- Create a new array to return as the result of the function.
- Take the elements from index 1 to the end of the calling array and put it at the start of the result array.
- Take the first element from the calling array and append it to the result array.
- Return result.

Possible methods: slice, push, concat.

Possible stumbling bits: empty array, array with just one element. 

*/

function rotateArray(array) {
  if (!Array.isArray(array)) return undefined;
  if (array.length === 0 || array.length === 1) return array;
  return array.slice(1).concat(array[0]);
}

console.log(rotateArray([7, 3, 5, 2, 9, 1]));       // [3, 5, 2, 9, 1, 7]
rotateArray(['a', 'b', 'c']);          // ["b", "c", "a"]
console.log(rotateArray(['a']));                    // ["a"]
rotateArray([1, 'a', 3, 'c']);         // ["a", 3, "c", 1]
console.log(rotateArray([{ a: 2 }, [1, 2], 3]));    // [[1, 2], 3, { a: 2 }]
rotateArray([]);                       // []

console.log(rotateArray());                         // undefined
rotateArray(1);                        // undefined
