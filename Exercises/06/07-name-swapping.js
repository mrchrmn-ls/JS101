function swapName(string) {
  let names = string.split(" ");
  return `${names[names.length - 1]}, ${names.slice(0, -1).join(" ")}`;
}

console.log(swapName('Karl Oskar Henriksson Ragvals'));    // "Ragvals, Karl Oskar Henriksson"