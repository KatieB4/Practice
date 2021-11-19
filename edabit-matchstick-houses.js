// Matchstick Houses
//
// This challenge will help you interpret mathematical relationships both algebraically and geometrically.
//
// Matchstick Houses, Steps 1, 2 and 3(matchstick houses png image on website)
//
// Create a
// function that takes a number(step) as an argument and returns the number of matchsticks in that step.See step 1, 2 and 3 in the image above.
// Examples
//
// matchHouses(1)➞ 6
//
// matchHouses(4)➞ 21
//
// matchHouses(87)➞ 436
//
// Notes
//
// Step 0 returns 0 matchsticks.
// The input(step) will always be a non - negative integer.
// Think of the input(step) as the total number of houses that have been connected together.

// _____________________________________________________________________________

// -----FIRST SOLVE-----
// function matchHouses(step) {
//   if (step <= 0) {
//     return 0;
//   } else {
//     return ((step - 1) * 5) + 6;
//   }
// }
//
// // ---TESTS---
// console.log(matchHouses(1) === 6);
// console.log(matchHouses(4) === 21);
// console.log(matchHouses(87) === 436);

// -----SECOND SOLVE-----
// *noticed comment that step is always non-negative integer
function matchHouses(step) {
  if (step === 0) {
    return 0;
  } else {
    return ((step - 1) * 5) + 6;
  }
}

// ---TESTS---
console.log(matchHouses(1) === 6);
console.log(matchHouses(4) === 21);
console.log(matchHouses(87) === 436);







// _____________________________________________________________________________
