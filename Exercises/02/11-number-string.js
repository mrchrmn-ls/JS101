const integerToString = number => {
  const DIGITS = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  let str = "";

  do {
    let index = number % 10;
    str = DIGITS[index] + str;
    number = Math.floor(number / 10);
  } while (number > 0);

  console.log(str);
  return str;
};

integerToString(4321);      // "4321"
integerToString(0);         // "0"
integerToString(-5000);      // "5000"
integerToString(1234567890);      // "1234567890"