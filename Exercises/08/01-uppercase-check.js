function isUppercase(string) {
  return string.split("").every(letter => letter === letter.toUpperCase());
}

console.log(isUppercase('Four Score'));
console.log(isUppercase('4SCORE!'));