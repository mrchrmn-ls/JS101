const MINUTES_IN_AN_HOUR = 60;
const HOURS_IN_A_DAY = 24;
const MINUTES_IN_A_DAY = HOURS_IN_A_DAY * MINUTES_IN_AN_HOUR;

function timeOfDay(min) {
  let minutesSinceMidnight = (min < 0) ?
                             MINUTES_IN_A_DAY + (min % MINUTES_IN_A_DAY) : min;

  let clockHours = Math.floor(
                   minutesSinceMidnight / MINUTES_IN_AN_HOUR
                   ) % HOURS_IN_A_DAY;
  let clockMinutes = minutesSinceMidnight % MINUTES_IN_AN_HOUR;

  return `${padZero(clockHours)}:${padZero(clockMinutes)}`;
}

function padZero(number) {
  return `0${number}`.slice(-2);
}

console.log(timeOfDay(0) === "00:00");
console.log(timeOfDay(-3) === "23:57");
console.log(timeOfDay(35) === "00:35");
console.log(timeOfDay(-1437) === "00:03");
console.log(timeOfDay(3000) === "02:00");
console.log(timeOfDay(800) === "13:20");
console.log(timeOfDay(-4231) === "01:29");