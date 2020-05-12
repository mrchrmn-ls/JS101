const vowels = ["a", "e", "i", "o", "u"];

function removeVowels(array) {
  return array.map(string => string.split("")
                            .filter(letter => !vowels.includes(letter.toLowerCase()))
                            .join(""));
}

console.log(removeVowels(['green', 'YELLOW', 'black', 'white']));