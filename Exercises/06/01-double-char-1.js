function repeater(str) {
  return str.split("").map(letter => letter.repeat(2)).join("");
}

repeater('Hello');        // "HHeelllloo"
repeater('Good job!');    // "GGoooodd  jjoobb!!"
repeater('');             // ""