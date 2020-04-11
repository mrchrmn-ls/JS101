let obj = {
  grape: { type: 'fruit', colors: ['red', 'green'], size: 'small' },
  carrot: { type: 'vegetable', colors: ['orange'], size: 'medium' },
  apple: { type: 'fruit', colors: ['red', 'green'], size: 'medium' },
  apricot: { type: 'fruit', colors: ['orange'], size: 'medium' },
  marrow: { type: 'vegetable', colors: ['green'], size: 'large' },
};

let result = [];

for (let key in obj) {
  if (obj[key].type === "fruit") {

    let colors = obj[key].colors.map(color => {
      return color[0].toUpperCase() + color.slice(1);
    });

    result.push(colors);
  } else {
    result.push(obj[key].size.toUpperCase());
  }
}

console.log(result);