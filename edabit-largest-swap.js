// Largest Swap

// Write a function that takes a two-digit number and determines if it's the largest of two possible digit swaps.

// To illustrate:

// largestSwap(27) ➞ false

// largestSwap(43) ➞ true

// If 27 is our input, we should return false because swapping the digits gives us 72, and 72 > 27. On the other hand, swapping 43 gives us 34, and 43 > 34.
// Examples

// largestSwap(14) ➞ false

// largestSwap(53) ➞ true

// largestSwap(99) ➞ true

// Notes

// Numbers with two identical digits (third example) should yield true (you can't do better).


// _____________________________________________________________________________

// -----FIRST SOLVE-----

function largestSwap(num) {
  let inputNum = num.toString();
  let firstDigit = inputNum[0];
  let secondDigit = inputNum[1];

  if (firstDigit >= secondDigit) {
    return true;
  } else {
    return false;
  }

}

// ---TESTS---
console.log(largestSwap(27) === false);
console.log(largestSwap(43) === true);
console.log(largestSwap(14) === false);
console.log(largestSwap(53) === true);
console.log(largestSwap(99) === true);



// ---APPROACH---
// convert input number to String
// assign each digit a variable
// write if statement for logic
// compare the variables
// return true or false

// ---ASSUMPTIONS---
// most edge cases don't apply here- no input, single digit input, more than 2 digit input, non-number input
// input will always be only 2 digits, no more, no less (see problem explanation)
// input will always be a number (see problem explanation)

// ---POSSIBLE EDGE CASES---
// no input                   : return false - use extra if logic
// single digit input         : return false - use extra if logic
// more than 2 digit input    : return false - use extra if logic
// same 2 digits              : return true (see notes from problem explanation)
// non-number input           : return false - use extra if logic

// _____________________________________________________________________________
// -----SECOND SOLVE-----

function largestSwap(num) {
  let firstDigit = num.toString().charAt(0);
  let secondDigit = num.toString().charAt(1);

  return firstDigit >= secondDigit;

}

// ---TESTS---
console.log(largestSwap(27) === false);
console.log(largestSwap(43) === true);
console.log(largestSwap(14) === false);
console.log(largestSwap(53) === true);
console.log(largestSwap(99) === true);

// ---APPROACH---
// convert input number to String
// assign the two digits to variables, using charAt method to break up string
// return comparison of the numbers/ variables
// probably don't need return statements, as the response to greater than or equals will already be true or false

// ---ASSUMPTIONS---
// most edge cases don't apply here- no input, single digit input, more than 2 digit input, non-number input
// input will always be only 2 digits, no more, no less (see problem explanation)
// input will always be a number (see problem explanation)

// ---POSSIBLE EDGE CASES---
// no input                   : return false - use extra if logic
// single digit input         : return false - use extra if logic
// more than 2 digit input    : return false - use extra if logic
// same 2 digits              : return true (see notes from problem explanation)
// non-number input           : return false - use extra if logic

// _____________________________________________________________________________