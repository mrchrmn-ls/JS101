const stringToInteger = str => {
  const DIGITS = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9
  };
  let digits = str.split("").map(char => DIGITS[char]);
  let int = 0;
  digits.forEach(digit => (int = (10 * int) + digit));
  return int;
};

const stringToSignedInteger = str => {
  if (str.startsWith("+")) {
    return stringToInteger(str.slice(1));
  } else if (str.startsWith("-")) {
    return -1 * stringToInteger(str.slice(1));
  } else {
    return stringToInteger(str);
  }
};

console.log(stringToSignedInteger("4321") === 4321); // logs true
console.log(stringToSignedInteger("-570") === -570); // logs true
console.log(stringToSignedInteger("+100") === 100); // logs true