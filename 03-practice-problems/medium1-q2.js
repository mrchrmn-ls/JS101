let munstersDescription = "The Munsters are creepy and spooky.";

let lowerUpper = "";

for (i = 0; i < munstersDescription.length; i += 1) {
  if (munstersDescription.charAt(i) <= "Z") {
    lowerUpper += munstersDescription.charAt(i).toLowerCase();
  } else {
    lowerUpper += munstersDescription.charAt(i).toUpperCase();
  }
}

console.log(lowerUpper);