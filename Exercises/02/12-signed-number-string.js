const integerToString = number => {
  const DIGITS = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  let str = "";

  do {
    let index = number % 10;
    str = DIGITS[index] + str;
    number = Math.floor(number / 10);
  } while (number > 0);

  return str;
};

const signedIntegerToString = number => {
  let str = integerToString(Math.abs(number));

  switch (Math.sign(number)) {
    case 1:
      str = "+" + str;
      break;
    case -1:
      str = "-" + str;
  }

  return str;
};

console.log(signedIntegerToString(4321) === "+4321");
console.log(signedIntegerToString(-123) === "-123");
console.log(signedIntegerToString(0) === "0");