function isPalindrome(string) {
  return string === string.split('').reverse().join('');
}

function stripString(string) {
  return string.toLowerCase().replace(/[^a-z0-9]/g, "");
}

function isRealPalindrome(string) {
  return isPalindrome(stripString(string));
}

console.log(isRealPalindrome("madam"));
console.log(isRealPalindrome("Madsam"));
console.log(isRealPalindrome("Madam i'm adam"));
console.log(isRealPalindrome("madam"));