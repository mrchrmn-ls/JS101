const MINS_PER_HOUR = 60;
const HOURS_PER_DAY = 24;
const MINS_PER_DAY = HOURS_PER_DAY * MINS_PER_HOUR;

function afterMidnight(clock) {
  let hours = Number(clock.split(":")[0]) % HOURS_PER_DAY;
  let minutes = (hours * MINS_PER_HOUR) + Number(clock.split(":")[1]);
  return minutes;
}

function beforeMidnight(clock) {
  return (MINS_PER_DAY - (afterMidnight(clock) % MINS_PER_DAY)) % MINS_PER_DAY;
}


console.log(afterMidnight("00:00") === 0);
console.log(beforeMidnight("00:00") === 0);
console.log(afterMidnight("12:34") === 754);
console.log(beforeMidnight("12:34") === 686);
console.log(afterMidnight("24:00") === 0);
console.log(beforeMidnight("24:00") === 0);