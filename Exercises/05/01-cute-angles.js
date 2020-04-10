const padZeroes = num => {
  if (num.toString().length === 1) {
    return "0" + num;
  } else {
    return num.toString();
  }
};

const dms = decimal => {
  let degrees = Math.floor(decimal);
  let minutes = Math.floor((decimal - degrees) * 60);
  let seconds = Math.floor((3600 * (decimal - degrees)) - (60 * minutes));

  let minStr = padZeroes(minutes);
  let secStr = padZeroes(seconds);

  console.log(`${degrees}°${minStr}'${secStr}"`);
};


dms(30);           // 30°00'00"
dms(76.73);        // 76°43'48"
dms(254.6);        // 254°35'59"
dms(93.034773);    // 93°02'05"
dms(0);            // 0°00'00"
dms(360);          // 360°00'00" or 0°00'00"