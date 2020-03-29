const rlsync = require('readline-sync');

let name = rlsync.question("What is your name? ");

if (name.endsWith("!")) {
  console.log(`HELLO, ${name.toUpperCase().split("!")[0]}. WHY ARE WE SCREAMING?!`);
} else {
  console.log(`Hello, ${name}.`);
}