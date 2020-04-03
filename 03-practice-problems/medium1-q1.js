let str = "The Flintstones Rock!";

for (let ctr = 0; ctr < 10; ctr += 1) {
  console.log(str.padStart(str.length + ctr));
}