const numberWords = {
  zero: 0,
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
  ten: 10,
  eleven: 11,
  twelve: 12,
  thirteen: 13,
  fourteen: 14,
  fifteen: 15,
  sixteen: 16,
  seventeen: 17,
  eighteen: 18,
  nineteen: 19
};

function alphabeticNumberSort(array) {
  let wordArray = array.map(number => {
    for (key in numberWords) {
      if (numberWords[key] === number) {
        return key;
      }
    }
  });

  wordArray.sort();

  let result = wordArray.map(word => {
    return numberWords[word];
  });

  return result;
}

alphabeticNumberSort(
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]);