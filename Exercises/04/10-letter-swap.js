const swap = str => {
  let words = str.split(" ");
  let newWords = [];

  words.forEach(word => {
    let newWord = word[word.length - 1] + word.slice(1, -1);
    if (word.length > 1) {
      newWord += word[0];
    }
    newWords.push(newWord);
  });

  return newWords.join(" ");
};

swap('Oh what a wonderful day it is');  // "hO thaw a londerfuw yad ti si"
swap('Abcde');                          // "ebcdA"
swap('a');