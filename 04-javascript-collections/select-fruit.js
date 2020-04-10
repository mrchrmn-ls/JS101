function selectFruit(obj) {
  let result = {};
  for (let key in obj) {
    if (obj[key] === "Fruit") {
      result[key] = "Fruit";
    }
  }
  return result;
}

let produce = {
  apple: 'Fruit',
  carrot: 'Vegetable',
  pear: 'Fruit',
  broccoli: 'Vegetable'
};

console.log(selectFruit(produce)); // => { apple: 'Fruit', pear: 'Fruit' }