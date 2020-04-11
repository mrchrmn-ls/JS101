let obj = {
  first: ['the', 'quick'],
  second: ['brown', 'fox'],
  third: ['jumped'],
  fourth: ['over', 'the', 'lazy', 'dog'],
};

let vowels = "aeiou";

Object.values(obj).forEach(arr => {
  arr.forEach(word => {
    console.log(word.split("")
                    .filter(element => vowels.includes(element))
                    .join(""));
  });
});