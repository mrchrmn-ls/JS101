/*

Some people believe that Fridays that fall on the 13th day of the month are considered to be unlucky days. Write a function that takes a year as an argument, and returns the number of Friday the 13ths in that year. You may assume that the year is greater than 1752, which is when the United Kingdom adopted the modern Gregorian Calendar. You may also assume that the same calendar will remain in use for the foreseeable future.

Examples:

fridayThe13ths(1986);      // 1
fridayThe13ths(2015);      // 3
fridayThe13ths(2017);      // 2

Input: Number
Output: Number

Idea:
  - Check the 13th of each month of the specified year to see whether it was / will be a Friday
    - Create a Date object for the 13th of each month of the specified year
    - Use getDay method to find the weekday of the date
      - if it was /will be a friday
        - increment a counter for the year
    - return counter
*/

function fridayThe13ths(year) {
  let counter = 0;
  let testDate = new Date();
  for (let month = 1; month < 13; month += 1) {
    testDate = new Date(`${month} 13, ${year}`);
    if (testDate.getDay() === 5) {
      counter += 1;
    }
  }
  return counter;
}

fridayThe13ths(1986);      // 1
fridayThe13ths(2015);      // 3
fridayThe13ths(2017);      // 2
