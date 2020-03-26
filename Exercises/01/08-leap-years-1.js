const isLeapYear = year => {
  let result = false;
  if (year % 4 === 0) result = true;
  if (year % 100 === 0) result = false;
  if (year % 400 === 0) result = true;
  return result;
};