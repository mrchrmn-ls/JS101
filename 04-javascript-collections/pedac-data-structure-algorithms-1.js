// PROBLEM:

// Given a string, write a function `palindromeSubstrings` which returns
// all the substrings from a given string which are palindromes. Consider
// palindrome words case sensitive.

// Test cases:

// palindromeSubstrings("supercalifragilisticexpialidocious") == ["ili"]
// palindromeSubstrings("abcddcbA") == ["bcddcb", "cddc", "dd"]
// palindromeSubstrings("palindrome") == []
// palindromeSubstrings("") == []

/* 

INPUT is any string, including an empty string. 

OUTPUT is either an array of strings if palindromes are found in the input, 
or and empty array if no palindromes are found.

RULES: 
All palindromic substrings are pushed to the output array, 
even if they are part of a larger palindromic substring.
Palindromes are case sensitive.

*/

