function sequence(num) {
  let seq = [];
  for (let i = 1; i <= num; i += 1) {
    seq.push(i);
  }
  return seq;
}

sequence(5);    // [1, 2, 3, 4, 5]
sequence(3);    // [1, 2, 3]
sequence(1);    // [1]