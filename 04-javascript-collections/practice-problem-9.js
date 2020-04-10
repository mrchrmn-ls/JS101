let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237
};

let cumulativeAge = Object.values(ages).reduce((acc, age) => acc + age, 0);

console.log(cumulativeAge);

let cumulativeAgeForIn = 0;

for (let key in ages) {
  cumulativeAgeForIn += ages[key];
}

console.log(cumulativeAgeForIn);