function doubleConsonants(str) {
  return str.split("").map(char => {
    if (char.match(/[A-Z]/i) &&
        !["a", "e", "i", "o", "u"].includes(char.toLowerCase())) {
      return char.repeat(2);
    }
    return char;
  }).join("");
}

doubleConsonants('String');          // "SSttrrinngg"
console.log(doubleConsonants('Hello-World!'));    // "HHellllo-WWorrlldd!"
doubleConsonants('July 4th');        // "JJullyy 4tthh"
doubleConsonants('');                // ""