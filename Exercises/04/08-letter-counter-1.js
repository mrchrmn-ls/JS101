const wordSizes = str => {
  if (str === "") return {};

  let words = str.split(" ");
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

wordSizes('Four score and seven.');                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 1, "7": 2 }
wordSizes("What's up doc?");                              // { "2": 1, "4": 1, "6": 1 }
console.log(wordSizes(''));