const REPLACEMENTS = {
  adjective: ["quick", "lazy", "sleepy", "noisy", "hungry"],
  noun: ["fox", "dog", "head", "leg", "tail", "cat"],
  verb: ["jumps", "lifts", "bites", "licks", "pats"], 
  adverb: ["easily", "lazily", "noisily", "excitedly"]
}

let template1 =
  "The %adjective% brown %noun% %adverb% " +
  "%verb% the %adjective% yellow " +
  "%noun%, who %adverb% %verb% his " +
  "%noun% and looks around."

// get random integer between 0 and max
function rndInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

// get a random element from an array
function rndElement(array) {
  return array[rndInt(array.length - 1)];
}

//strip the keyword of the ending % sign
function wordType(word) {
  return word.substring(1, word.lastIndexOf("%"));
}

function madLibs(template) {
  return template.split(" ")
                 .map(word => { 
                    if (word[0] === "%") {
                      return rndElement(REPLACEMENTS[wordType(word)]) + 
                             word.substring(word.lastIndexOf("%") + 1);
                    }
                    return word;
                  })
                 .join(" ");
}

console.log(madLibs(template1));