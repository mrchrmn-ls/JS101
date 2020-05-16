function staggeredCase(string) {
  return string.split("")
               .map((letter, index) => {
                 return (index % 2 === 0) ? letter.toUpperCase() : letter.toLowerCase();
               })
               .join("");
}

console.log(staggeredCase('ignore 77 the 444 numbers'))