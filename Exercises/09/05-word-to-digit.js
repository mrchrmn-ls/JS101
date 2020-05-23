/*
Write a function that takes a sentence string as an argument, 
and returns that string with every occurrence of a "number word" — 
'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine' 
— converted to its corresponding digit character.

Example:

wordToDigit('Please call me at five five five one two three four. Thanks.');
// "Please call me at 5 5 5 1 2 3 4. Thanks."

Input: String
Output: String
Rules: _Replace_ words with digits.

Idea: Look into String.prototype.replace().

Algorithm:
- Create an array with "number words". 
- Replace all occurrences of every number word with the corresponding digit: 
  - Split sentence into words.
  - Go through all words.
  - If a word is a "number word", replace it with its index in the array
  - Join all words into a sentence again.

*/

const numberWords = [
  'zero', 'one', 'two', 'three', 'four', 
  'five', 'six', 'seven', 'eight', 'nine'];

function wordToDigit(sentence) {
  numberWords.forEach((word, index) => {
    let re = new RegExp('\\b' + word + '\\b', "gi");
    sentence = sentence.replace(re, index);
  });
  
  return sentence;
}

wordToDigit('Please call me at five five five one two three four. Thanks.');
