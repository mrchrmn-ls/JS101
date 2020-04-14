function countOccurrences(arr) {
  let counts = {};

  arr.forEach(type => {
    let typeLc = type.toLowerCase();
    counts[typeLc] = counts[typeLc] || 0;
    counts[typeLc] += 1;
  });

  Object.keys(counts).forEach(type => {
    console.log(`${type} => ${counts[type]}`);
  });
}

let vehicles = ['car', 'Car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'motorCycle', 'car', 'truck'];

countOccurrences(vehicles);