/*

A featured number (something unique to this exercise) is 
an odd number that is 
a multiple of 7, with 
all of its digits occuring exactly once each. 

For example, 49 is a featured number, 
but 98 is not (it is not odd), 
97 is not (it is not a multiple of 7), 
and 133 is not (the digit 3 appears twice).

Write a function that takes an integer as an argument, 
and returns the next featured number greater than the integer. 
Issue an error message if there is no next featured number.


NOTE: The largest possible featured number is 9876543201.


Examples:

featured(12);           // 21
featured(20);           // 21
featured(21);           // 35
featured(997);          // 1029
featured(1029);         // 1043
featured(999999);       // 1023547
featured(999999987);    // 1023456987
featured(9876543200);   // 9876543201
featured(9876543201);   // "There is no possible number that fulfills those requirements.

Input: Number
Output: Number

Algorithm:
- Issue error message if number is greater or equal than 9876543201 and end function.
- Look at the next multiple of 7 that is greater than our number.
  - check if it is odd (% 2 === 1)
  - check if if every digit is unique
    - convert number into an array of digits 
    - check that each digit is included only once.
  - if both conditions are met 
    - return current multiple 7. 
    - Otherwise check the next multiple of 7.

*/

function hasUniqueDigits(number) {
  digits = String(number).split("");
  return digits.every(digit => digits.indexOf(digit) === digits.lastIndexOf(digit));
}

function featured(num) {
  const MAX_FEATURED = 9876543201;
  let nextMultiple = num - (num % 7) + 7;

  if (num >= MAX_FEATURED) 
    return "There is no possible number that fulfils those requirements.";
    
  while ((nextMultiple % 2 === 0) || hasUniqueDigits(nextMultiple) === false) {
    nextMultiple += 7;
  }
  
  return nextMultiple;
}

console.log(featured(12));           // 21
console.log(featured(20));           // 21
console.log(featured(21));           // 35
console.log(featured(997));          // 1029
console.log(featured(1029));         // 1043
console.log(featured(999999));       // 1023547
console.log(featured(999999987));    // 1023456987
console.log(featured(9876543200));   // 9876543201
console.log(featured(9876543201));   // "There is no possible number that fulfills those requirements.
