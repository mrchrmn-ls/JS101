let statement = "The Flintstones Rock";

let letters = statement.split("");

let letterCount = {};

for (let index = 0; index < letters.length; index += 1) {
  if (letters[index] === " ") continue;

  if (Object.keys(letterCount).includes(letters[index])) {
    letterCount[letters[index]] += 1;
  } else {
    letterCount[letters[index]] = 1;
  }
}

console.log(letterCount);