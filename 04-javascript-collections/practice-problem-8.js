let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Pebbles", "Bambam"];

let flintObj = {};

flintstones.forEach( (name, index) => {
  flintObj[name] = index;
});

console.log(flintObj);