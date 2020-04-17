function centerOf(str) {
  let center = str[Math.ceil(str.length / 2) - 1];
  if (str.length % 2 === 0) {
    center += str[str.length / 2];
  }
  return middle;
}

centerOf('I Love JavaScript'); // "a"
centerOf('Launch School');     // " "
centerOf('Launch');            // "un"
centerOf('Launchschool');      // "hs"
centerOf('x');                 // "x"