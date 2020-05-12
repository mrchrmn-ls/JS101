function buyFruit(list) {
  let result = [];
  list.forEach(subArray => {
    result.push(...new Array(subArray[1]).fill(subArray[0]));
  });
  return result;
}

console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));