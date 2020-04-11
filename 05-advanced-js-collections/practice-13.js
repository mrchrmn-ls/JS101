let arr = [[1, 6, 7], [1, 5, 3], [1, 8, 3]];

let newArr = arr.slice().sort((a,b) => {
  let oddsA = a.filter(num => num % 2 === 1).reduce((acc, num) => acc + num, 0);
  let oddsB = b.filter(num => num % 2 === 1).reduce((acc, num) => acc + num, 0);

  return oddsA - oddsB;
});

console.log(newArr);