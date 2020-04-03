const century = year => {
  let cent = Math.floor((year - 1) / 100) + 1;

  if (cent % 100 === 11 || cent % 100 === 12 || cent % 100 === 13) {
    return cent + "th";
  }

  switch (cent % 10) {
    case 1:
      return cent + "st";
    case 2:
      return cent + "nd";
    case 3:
      return cent + "rd";
    default:
      return cent + "th";
  }
};

console.log(century(1900));
console.log(century(1901));
console.log(century(899));
console.log(century(10123));
console.log(century(1209));
console.log(century(11309));
