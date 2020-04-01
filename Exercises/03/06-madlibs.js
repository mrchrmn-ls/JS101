const rlsync = require("readline-sync");

const stories = {
  1: "Do you VERB your ADJ NOUN ADV? That's hilarious.",
  2: "The ADJ NOUN VERBs ADV over the lazy dog.",
  3: "The NOUN quickly VERBs up ABJ Joe's turtle."
};

let noun = rlsync.question("Enter a noun: ");
let verb = rlsync.question("Enter a verb: ");
let adj = rlsync.question("Enter an adjective: ");
let adv = rlsync.question("Enter an adverb: ");

let story = Math.ceil(3 * Math.random());

console.log(stories[story].replace("NOUN", noun).replace("VERB", verb).replace("ADJ", adj).replace("ADV", adv));