function substringsAtStart(str) {
  let result = [];
  for (let i = 1; i <= str.length; i += 1) {
    result.push(str.substring(0, i));
  }
  return result;
}

function substrings(str) {
  let result = [];
  for (let start = 0; start <= str.length; start += 1) {
    result = result.concat(substringsAtStart(str.substring(start)));
  }
  return result;
}

function palindromes(str) {
  return substrings(str).filter(sub => (sub.split("").reverse().join("") === sub) && (sub.length > 1));
}

console.log(palindromes('knitting cassettes'));