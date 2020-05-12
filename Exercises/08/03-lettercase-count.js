function letterCaseCount(string) {
  return {
  lowercase: string.match(/[a-z]/g) ? string.match(/[a-z]/g).length : 0,
  uppercase: string.match(/[A-Z]/g) ? string.match(/[A-Z]/g).length : 0,
  neither: string.match(/[^A-Z]/gi) ? string.match(/[^A-Za-z]/g).length : 0
  };
}

letterCaseCount('abCdef 123');  // { lowercase: 5, uppercase: 1, neither: 4 }
console.log(letterCaseCount('AbCd +Ef'));    // { lowercase: 3, uppercase: 3, neither: 2 }
letterCaseCount('123');         // { lowercase: 0, uppercase: 0, neither: 3 }
letterCaseCount('');