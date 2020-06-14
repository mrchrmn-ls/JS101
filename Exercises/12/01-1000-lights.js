/*
You have a bank of switches before you, numbered from 1 to count. Every switch is connected to exactly one light that is initially off. You walk down the row of switches and toggle every one of them, that is, you flip every switch. All the lights are now on. You walk back to the beginning of the row and start another pass. On this second pass, you toggle switches 2, 4, 6, and so on. Now, every other light is on. On the third pass, you go back to the beginning again, this time toggling switches 3, 6, 9, and so on. You continue to repeat this process until you have made count passes.

Write a program that takes one argument—the total number of switches—and returns an array of the lights that are on after count passes.

Examples:

function lightsOn(switches) {
  // ...
}

Input: Number
Output: Array of numbers

Data:
- use array to represent the lights
- length of array count + 1 so light numbers correspond to array indices
- zero index element will be 0
- values are 0 for off and 1 for on. 

Idea:
- Manipulate lights array in every round
- Return indices of array elements where value equals 1

Algorithm:
- Create lights array of length (count + 1)
- Fill array with 0
- Repeat this count times:
  - Loop over array, starting at element iteration, index step size equals iteration
    - switch value at each index from 1 to 0 or 0 to 1 (extract function)
- Loop over lights array and add indices of elements with value 1 to result array
- Return result
    
Code bits:
- new Array
- fill()
- for loops
- forEach
- push

*/

function flip(array, index) {
  array[index] = array[index] === 1 ? 0 : 1;
}

function lightsOn(count) {
  let lights = new Array(count + 1);
 
  for (let iteration = 1; iteration <= count; iteration += 1) {
    for (let index = iteration; index < count + 1; index += iteration) {
      flip(lights, index);
    }
  }
  
  let result = [];
  lights.forEach((light, index) => {
    if (light === 1) {
      result.push(index);
    }
  });

  return result;
  
}

console.log(lightsOn(5));        // [1, 4]
// Detailed result of each round for `5` lights
// Round 1: all lights are on
// Round 2: lights 2 and 4 are now off;     1, 3, and 5 are on
// Round 3: lights 2, 3, and 4 are now off; 1 and 5 are on
// Round 4: lights 2 and 3 are now off;     1, 4, and 5 are on
// Round 5: lights 2, 3, and 5 are now off; 1 and 4 are on

console.log(lightsOn(100));      // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]