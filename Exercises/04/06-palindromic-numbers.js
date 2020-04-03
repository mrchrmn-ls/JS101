function isPalindromicNumber(num) {
  return String(num) === String(num).split('').reverse().join('');
}

console.log(isPalindromicNumber(34543));