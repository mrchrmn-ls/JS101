/*let crunch = str => {
  let previous = "";
  let crunchedStr = "";
  for (i = 0; i < str.length; i += 1) {
    if (str[i] !== previous) {
      crunchedStr += str[i];
      previous = str[i];
    }
  }
  return crunchedStr;
};*/


const crunch = str => str
                .split("")
                .reduce((acc, element) => {
                  if (!acc.endsWith(element)) {
                    acc += element;
                  }
                  return acc;
                }, "");


console.log(crunch('ddaaiillyy ddoouubbllee'));    // "daily double"
console.log(crunch('4444abcabccba'));              // "4abcabcba"
crunch('ggggggggggggggg');            // "g"
crunch('a');                          // "a"
crunch('');                           // ""