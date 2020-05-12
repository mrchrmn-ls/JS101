function capWord(string) {
  return string[0].toUpperCase()
                  .concat(string.slice(1)
                                .toLowerCase());
}

function wordCap(string) {
  return string.split(" ").map(capWord).join(" ");
}

console.log(wordCap('the javaScript language - this is a "quoted" word'));