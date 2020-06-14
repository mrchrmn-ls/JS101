/*
A collection of spelling blocks has two letters per block, as shown in this list:

B:O   X:K   D:Q   C:P   N:A
G:T   R:E   F:S   J:W   H:U
V:I   L:Y   Z:M

This limits the words you can spell with the blocks to only those words that do not use both letters from any given block. You can also only use each block once.

Write a function that takes a word string as an argument, and returns true if the word can be spelled using the set of blocks, or false otherwise. You can consider the letters to be case-insensitive when you apply the rules.

Examples:

isBlockWord('BATCH');      // true
isBlockWord('BUTCH');      // false
isBlockWord('jest');       // true


Rules:
- Only one of the two letters on each block can be used in a valid word.
 -> Each letter must be on a different block
- Each block can only be used once


Data Structure:
- Store the blocks in an array. 
- Each array element, each block is an array of two letters.
=> nested array

Algorithm:
- For each letter of the word, check 
  - if that letter or its corresponding block letter appears in the word
    -return false
- Return true


Ideas:
- Extract function getBlockSibling(letter, blocks) to find corresponding letter. 

*/

const blocks = [
  ["B", "O"], ["X", "K"], ["D", "Q"], ["C", "P"], ["N", "A"],
  ["G", "T"], ["R", "E"], ["F", "S"], ["J", "W"], ["H", "U"],
  ["V", "I"], ["L", "Y"], ["Z", "M"]
  ]
  
  function getBlockSibling(letter) {
    let myBlock = blocks.filter(block => block.includes(letter)).flat();
    return String(myBlock.filter(blockletter => blockletter !== letter));
  }
  
  function isBlockWord(word) {
    word = word.toUpperCase();
    let currentLetter;
    
    for (let index = 0; index < word.length; index += 1) {
      currentLetter = word[index];
      if ((word.lastIndexOf(currentLetter) !== index) ||
           word.includes(getBlockSibling(currentLetter))) {
        return false;
      }
    }
    
    return true;
  }