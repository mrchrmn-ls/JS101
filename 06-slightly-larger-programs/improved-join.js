/*
Write a function named joinOr that produces the following results:

joinOr([1, 2]);                  // => "1 or 2"
joinOr([1, 2, 3]);               // => "1, 2, or 3"
joinOr([1, 2, 3], '; ');         // => "1; 2; or 3"
joinOr([1, 2, 3], ', ', 'and');  // => "1, 2, and 3"
*/

/*
Input:
- an array,
- a delimiter,
- a connecting word

Output:
- array elements separated by delimiter, connecting word before the last element

Rules:
- default delimiter is ", "
- default connecting word is "or"
- no delimiter if array has only two elements
- no space before delimiter, one after
    - exception two elements: one space before and one space after delimiter
*/

function joinOr(arr, delimiter = ", ", word = "or") {
  if (arr.length === 2) {
    return arr[0] + " " + word + " " + arr[1];
  }

  let result = "";
  for (let index = 0; index < arr.length - 1; index += 1) {
    result += arr[index] + delimiter;
  }
  result += word + " " + arr[arr.length - 1];

  return result;
}

let str1 = joinOr([1, 2]);
let str2 = joinOr([1, 2, 3]);
let str3 = joinOr([1, 2, 3], '; ');
let str4 = joinOr([1, 2, 3], ', ', 'and');

console.log(str1);
console.log(str2);
console.log(str3);
console.log(str4);