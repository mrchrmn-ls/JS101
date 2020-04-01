const logInBox = str => {
  console.log("+" + "".padStart(str.length + 2, "-") + "+");
  console.log("|" + "".padStart(str.length + 2) + "|");
  console.log("| " + str + " |");
  console.log("|" + "".padStart(str.length + 2) + "|");
  console.log("+" + "".padStart(str.length + 2, "-") + "+");
};

logInBox('To boldly go where no one has gone before.');