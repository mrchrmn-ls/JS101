/*

Write a function that takes a string, and returns an object containing the following three properties:

the percentage of characters in the string that are lowercase letters
the percentage of characters that are uppercase letters
the percentage of characters that are neither
You may assume that the string will always contain at least one character.

Examples:

letterPercentages('abCdef 123');
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

letterPercentages('AbCd +Ef');
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

letterPercentages('123');
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }

Input: String
Output: Object

Rule: Percentages are formatted to two decimals.

Algorithm:
- Find and count all lowercase letters, divide count * 100 by length of the string, add property to result object
- Find and count all uppercase letters, divide count * 100 by length of the string, add property to result object
- add final property 


Methods:
String.prototype.match() -> Regular expression

*/

function percentage(count, total) {
  return (100 * count / total).toFixed(2);
}

function letterPercentages(string) {
  let result = {};

  let lowercaseCount = (string.match(/[a-z]/g) || []).length;
  let uppercaseCount = (string.match(/[A-Z]/g) || []).length;
  let neitherCount = string.length - uppercaseCount - lowercaseCount;

  result.lowercase = percentage(lowercaseCount, string.length);
  result.uppercase = percentage(uppercaseCount, string.length);
  result.neither = percentage(neitherCount, string.length);

  return result;
}

letterPercentages('abCdef 123');
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

letterPercentages('AbCd +Ef');
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

letterPercentages('123');
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }
