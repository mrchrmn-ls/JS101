const twice = int => {
  let intString = String(int);
  let length = intString.length;

  if (length % 2 === 1) return int * 2;

  if (intString.substring(0, length / 2) === intString.substring(length / 2)) {
    return int;
  } else {
    return int * 2;
  }
};

console.log(twice(118118));