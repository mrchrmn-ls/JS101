const getGrade = (scr1, scr2, scr3) => {
  let avg = (scr1 + scr2 + scr3) / 3;
  if (avg >= 90) return "A";
  if (avg >= 80) return "B";
  if (avg >= 70) return "C";
  if (avg >= 60) return "D";
  return "F";
};

console.log(getGrade(95, 90, 93));
console.log(getGrade(50, 50, 95));
console.log(getGrade(40, 30, 70));