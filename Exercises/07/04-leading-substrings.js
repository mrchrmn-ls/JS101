function substringsAtStart(str) {
  let result = [];
  for (let i = 1; i <= str.length; i += 1) {
    result.push(str.substring(0, i));
  }
  return result;
}

console.log(substringsAtStart('xyzzy'));