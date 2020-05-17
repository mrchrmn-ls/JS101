/*
Take the number 735291 and rotate it by one digit to the left, getting 352917. 
Next, keep the first digit fixed in place and rotate the remaining digits to get 329175. 
Keep the first two digits fixed in place and rotate again to get 321759. 
Keep the first three digits fixed in place and rotate again to get 321597. 
Finally, keep the first four digits fixed in place and rotate the final two digits to get 321579. 
The resulting number is called the maximum rotation of the original number.

Write a function that takes an integer as an argument, and returns the maximum rotation of that integer. 
You can (and probably should) use the rotateRightmostDigits function from the previous exercise.

Examples:

maxRotation(735291);          // 321579
maxRotation(3);               // 3
maxRotation(35);              // 53
maxRotation(105);             // 15 -- the leading zero gets dropped
maxRotation(8703529146);      // 7321609845

Input: Number
Output: Number

Idea: 
- Use rotateRightmostDigit function on increasingly shorter numbers where 
  the position argument always equals the length of the number
- This looks like a recursive approach might be worth a try:
We're calling rrD on our number. Then hand a substring of the result to rrD again until that substring would be 1. 
No wait! This is why rRD has the second argument! Just decrease it until done. 

*/

function rotateRightmostDigits(number, position) {
  let numString = String(number);
  let left = numString.slice(0, -position);
  let right = numString.slice(numString.length - position + 1);
  let digit = numString.slice(numString.length -position, numString.length - position + 1);
  return Number(left.concat(right.concat(digit)));
}

function maxRotation(number) {
  numLength = String(number).length;
  for (i = numLength; i > 1; i -= 1) {
    number = rotateRightmostDigits(number, i);
  }
  return number;
}

maxRotation(735291);          // 321579
maxRotation(3);               // 3
maxRotation(35);              // 53
maxRotation(105);             // 15 -- the leading zero gets dropped
maxRotation(8703529146);      // 7321609845