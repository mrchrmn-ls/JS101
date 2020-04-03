const isPalindrome = str => {
  for (let idx = 0; idx < Math.floor(str.length) / 2; idx++) {
    if (str[idx] !== str[str.length - idx - 1]) return false;
  }
  return true;
};

console.log(isPalindrome("madam"));
console.log(isPalindrome("Madam"));
console.log(isPalindrome("Madam i'm adam"));
console.log(isPalindrome("madam"));
