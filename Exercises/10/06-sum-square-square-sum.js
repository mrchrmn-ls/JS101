/*

Write a function that computes 
the difference between 
the square of the sum of the first count positive integers 
and the sum of the squares of the first count positive integers.

Examples:

sumSquareDifference(3);      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
sumSquareDifference(10);     // 2640
sumSquareDifference(1);      // 0
sumSquareDifference(100);    // 25164150


Input: Number
Output: Number

Algorithm:
- calculate the sum of the numbers up to an including the argument, then square it
  - use Gauss formula for that sum: n * (n + 1) / 2
- calculate the sum of the squares
- calculate the difference


*/

function gaussSum(n) {
  return n * (n + 1) / 2;
}

function squareSum(n) {
  return [...Array(n).keys()].reduce((acc, elem) => acc + (elem + 1)**2, 0);
}

function sumSquareDifference(n) {
  return gaussSum(n)**2 - squareSum(n);
}

sumSquareDifference(3);      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
sumSquareDifference(10);     // 2640
sumSquareDifference(1);      // 0
sumSquareDifference(100);    // 25164150
