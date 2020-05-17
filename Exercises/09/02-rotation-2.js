/*
Rotation (Part 2)
Write a function that rotates the last count digits of a number. To perform the rotation, move the first of the digits that you want to rotate to the end and shift the remaining digits to the left.

Examples:

rotateRightmostDigits(735291, 1);      // 735291
rotateRightmostDigits(735291, 2);      // 735219
rotateRightmostDigits(735291, 3);      // 735912
rotateRightmostDigits(735291, 4);      // 732915
rotateRightmostDigits(735291, 5);      // 752913
rotateRightmostDigits(735291, 6);      // 352917

Input: Number, Number
Output: Number

Algorithm: 
- Convert the first number to a string
- Rearrange string according to rules
    - Take the string LEFT of the specified digit and put them in a result array
    - Take all array elements RIGHT of the specified digit and append them to the result array 
    - Take the specified digit and append it to the end. 
- Join the resulting array to create a string, convert the string to a number and return it 

*/

function rotateRightmostDigits(number, position) {
  let numString = String(number);
  let left = numString.slice(0, -position);
  let right = numString.slice(numString.length - position + 1);
  let digit = numString.slice(numString.length -position, numString.length - position + 1);
  return Number(left.concat(right.concat(digit)));
}

rotateRightmostDigits(735291, 1);      // 735291
rotateRightmostDigits(735291, 2);      // 735219
rotateRightmostDigits(735291, 3);      // 735912
rotateRightmostDigits(735291, 4);      // 732915
rotateRightmostDigits(735291, 5);      // 752913
rotateRightmostDigits(735291, 6);      // 352917
