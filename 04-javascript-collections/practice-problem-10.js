let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237
};

let minimumAge = ages["Herman"];

for (let key in ages) {
  minimumAge = (ages[key] < minimumAge) ? ages[key] : minimumAge;
}

console.log(minimumAge);