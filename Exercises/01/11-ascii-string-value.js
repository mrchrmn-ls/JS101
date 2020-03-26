const asciiValue = string => {
  let stringValue = 0;
  for (i = 0; i < string.length; i += 1) {
    stringValue += string.charCodeAt(i);
  }
  return stringValue;
};

asciiValue('Four score');         // 984
asciiValue('Launch School');      // 1251
asciiValue('a');                  // 97
asciiValue('');                   // 0