/*
A triangle is classified as follows:

Equilateral: All three sides are of equal length.
Isosceles: Two sides are of equal length, while the third is different.
Scalene: All three sides are of different lengths.
To be a valid triangle, the sum of the lengths of the two shortest sides must be greater than the length of the longest side, and every side must have a length greater than 0. If either of these conditions is not satisfied, the triangle is invalid.

Write a function that takes the lengths of the three sides of a triangle as arguments, and returns one of the following four strings representing the triangle's classification: 'equilateral', 'isosceles', 'scalene', or 'invalid'.

Examples:

triangle(3, 3, 3);        // "equilateral"
triangle(3, 3, 1.5);      // "isosceles"
triangle(3, 4, 5);        // "scalene"
triangle(0, 3, 3);        // "invalid"
triangle(3, 1, 1);        // "invalid"

Input: 3 numbers a, b, c
Output: string

Rules: 
- if any number is 0 => invalid
- if the sum of the two smallest number is lower than the largest number 0 => invalid
- if a = b and b = c => equilateral
- if a = b or a = c or b => isosceles
- all other cases => scalene

Thinking about code:
- use arguments object to get array of side lengths to check for validity
  - use sort to find long and short sides
- use staggered ifs for types

*/

function triangle(a, b, c) {
  let sortedSides = Object.values(arguments).sort((x, y) => x - y);

  if (sortedSides.includes(0)) return "invalid";
  
  if (sortedSides[0] + sortedSides[1] <= sortedSides[2]) return "invalid";
  
  if (a === b && b === c) return "equilateral";
  
  if (a === b || b === c || c === a) return "isosceles";
  
  return "scalene";
  
}

console.log(triangle(3, 4, 5));
