/*
function isBalanced(string) {
  let openBracket = /[(]/g;
  let closeBracket = /[)]/g;

  let openCount = string.match(openBracket) === null ? 0 : string.match(openBracket).length;
  let closeCount = string.match(closeBracket) === null ? 0 : string.match(closeBracket).length;

  console.log(string + openCount + closeCount);

  return openCount === closeCount;
}
*/

function isBalanced(string) {
  let openCount = 0;
  let closeCount = 0;

  for (let i = 0; i < string.length; i += 1) {
    if (string[i] === ")") {
      if (openCount > closeCount) {
        closeCount += 1;
      } else {
        return false;
      }
    }
    if (string[i] === "(") {
      openCount += 1;
    }
  }

  return openCount === closeCount;
}

console.log(isBalanced("What (is) this?") === true);
console.log(isBalanced("What is) this?") === false);
console.log(isBalanced("What (is this?") === false);
console.log(isBalanced("((What) (is this))?") === true);
console.log(isBalanced("((What)) (is this))?") === false);
console.log(isBalanced("Hey!") === true);
console.log(isBalanced(")Hey!(") === false);
console.log(isBalanced("What ((is))) up(") === false);