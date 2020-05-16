function staggeredCase(string) {
  let chars = string.split("");
  let currentTargetCase = "upper";

  let staggeredChars = chars.map(char => {
    if (!/[a-z]/i.test(char)) return char;
    
    if (currentTargetCase === "upper") {
      currentTargetCase = "lower";
      return char.toUpperCase();
    } else {
      currentTargetCase = "upper";
      return char.toLowerCase();
    }

  });

  return staggeredChars.join("");
}

console.log(staggeredCase("ignore 77 the 444 numbers"));