function substrings(str) {
  let result = [];
  for (let start = 0; start < str.length; start += 1) {
    for (let end = start + 1; end <= str.length; end += 1) {
      result.push(str.substring(start, end));
    }
  }
  return result;
}

console.log(substrings('abcde'));