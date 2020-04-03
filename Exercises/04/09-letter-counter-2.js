const stripString = str => str.replace(/[^a-z\s]/gi, "");

const wordSizes = str => {
  if (str === "") return {};

  let words = stripString(str).split(" ");
  let letterCounter = {};

  words.forEach(element => {
    if (letterCounter[element.length]) {
      letterCounter[element.length] += 1;
    } else {
      letterCounter[element.length] = 1;
    }
});

  return letterCounter;
};

console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));