/*
Write a function that displays a four-pointed diamond in an nxn grid, where n is an odd integer supplied as an argument to the function. You may assume that the argument will always be an odd integer.

Examples:

diamond(1);
// logs
*
diamond(3);
// logs
 *
***
 *
diamond(9);
// logs
    *
   ***
  *****
 *******
*********
 *******
  *****
   ***
    *





Observations:
- Tip sits at column (n+1) / 2
- Broades width is at row (n+1) / 2
- String length goes from (n+1) / 2 => n => (n+1) / 2

Idea:
- Print spaces (padStart), then *
- Number of stars and spaces depend on row



*/

function diamond(n) {
  let leadingSpaces, stars;
  
  for (let row = 0; row < n; row += 1) {
    leadingSpaces = Math.abs(((n - 1) / 2) - row);
    stars = n - (2 * leadingSpaces);
    console.log("*".repeat(stars).padStart(leadingSpaces + stars));
  }
}

function hollowDiamond(n) {
  let leadingSpaces, width;
  
  for (let row = 0; row < n; row += 1) {
    leadingSpaces = Math.abs(((n - 1) / 2) - row);
    width = n - (2 * leadingSpaces);
    if (width > 2) {
      console.log("*".padStart(leadingSpaces + 1) + " ".repeat(width - 2) + "*");   
    } else{
      console.log("*".padStart(leadingSpaces + 1));         
    }
  }

}


diamond(9);

hollowDiamond(9);