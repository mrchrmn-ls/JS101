let stringy = int => {
  let str = "";
  for (let idx = 1; idx <= int; idx += 1) {
    str += idx % 2;
  }
  return str;
};

stringy = int => "10".repeat(Math.floor(int / 2)) + "1".repeat(int % 2);

console.log(stringy(5));    // "101010"
console.log(stringy(9));    // "101010101"
stringy(4);    // "1010"
stringy(7);    // "1010101"