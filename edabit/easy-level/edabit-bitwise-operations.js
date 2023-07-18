"use strict";

// Bitwise Operations

// A decimal number can be represented as a sequence of bits. To illustrate:

// 6 = 00000110
// 23 = 00010111

// From the bitwise representation of numbers, we can calculate the bitwise AND, bitwise OR and bitwise XOR. Using the example above:

// bitwiseAND(6, 23) ➞ 00000110

// bitwiseOR(6, 23) ➞ 00010111

// bitwiseXOR(6, 23) ➞ 00010001

// Write three functions to calculate the bitwise AND, bitwise OR and bitwise XOR of two numbers.
// Examples

// bitwiseAND(7, 12) ➞ 4

// bitwiseOR(7, 12) ➞ 15

// bitwiseXOR(7, 12) ➞ 11

// Notes

// JavaScript has a useful function: toString(2), where you can see the binary representation of a decimal number.

// _____________________________________________________________________________
// _____________________________________________________________________________

// -----FIRST ATTEMPT-----
// function bitwiseAND(n1, n2) {
//   const convertToBinary = (decimal) => decimal.toString(2);
//   const firstNumArray = [...convertToBinary(n1).padStart(15, 0)];
//   const secondNumArray = [...convertToBinary(n2).padStart(15, 0)];

//   //compare
//   const binaryAndArray = [];
//   for (let i = 0; i < firstNumArray.length; i++) {
//     const digit = firstNumArray[i] === "1" && secondNumArray[i] === "1" ? 1 : 0; // 1's in quotes here because the array elements are strings, not numbers
//     binaryAndArray.push(digit);
//   }

//   // convert comparison result back to decimal
//   const binaryAndStr = binaryAndArray.join("");

//   // return decimal
//   return Number.parseInt(binaryAndStr, 2);
// }

// function bitwiseOR(n1, n2) {
//   const convertToBinary = (decimal) => decimal.toString(2);
//   const firstNumArray = [...convertToBinary(n1).padStart(15, 0)];
//   const secondNumArray = [...convertToBinary(n2).padStart(15, 0)];

//   //compare
//   const binaryOrArray = [];
//   for (let i = 0; i < firstNumArray.length; i++) {
//     const digit = firstNumArray[i] === "1" || secondNumArray[i] === "1" ? 1 : 0; // 1's in quotes here because the array elements are strings, not numbers
//     binaryOrArray.push(digit);
//   }

//   // convert comparison result back to decimal
//   const binaryOrStr = binaryOrArray.join("");

//   // return decimal
//   return Number.parseInt(binaryOrStr, 2);
// }

// function bitwiseXOR(n1, n2) {
//   const convertToBinary = (decimal) => decimal.toString(2);
//   const firstNumArray = [...convertToBinary(n1).padStart(15, 0)];
//   const secondNumArray = [...convertToBinary(n2).padStart(15, 0)];

//   //compare
//   const binaryXORArray = [];
//   for (let i = 0; i < firstNumArray.length; i++) {
//     const digit = firstNumArray[i] === secondNumArray[i] ? 0 : 1; // 1's in quotes here because the array elements are strings, not numbers
//     binaryXORArray.push(digit);
//   }

//   // convert comparison result back to decimal
//   const binaryXORStr = binaryXORArray.join("");

//   // return decimal
//   return Number.parseInt(binaryXORStr, 2);
// }

// ---APPROACH---
// (I see that there are already operators for this built into js, but want to try developing myself first.)

// convert each input to binary
// pad each at start for some max length for easier comparison (instead of comparing two numbers with different number of digits)
// compare the two binary numbers, depending on "AND", "OR", or "XOR" requirement, with single binary result
// convert that binary result back to decimal
// return decimal number in from function

// _____________________________________________________________________________
// _____________________________________________________________________________

// SECOND ATTEMPT
// const convertToBinary = (decimal) => decimal.toString(2);
// const binaryArray = (originalNum) => [
//   ...convertToBinary(originalNum).padStart(15, 0),
// ];

// function bitwiseAND(n1, n2) {
//   const firstNumArray = binaryArray(n1);
//   const secondNumArray = binaryArray(n2);

//   //compare
//   const binaryAndArray = [];
//   for (let i = 0; i < firstNumArray.length; i++) {
//     const digit = firstNumArray[i] === "1" && secondNumArray[i] === "1" ? 1 : 0; // 1's in quotes here because the array elements are strings, not numbers
//     binaryAndArray.push(digit);
//   }
//   // convert comparison result back to decimal
//   const binaryAndStr = binaryAndArray.join("");
//   // return decimal
//   return Number.parseInt(binaryAndStr, 2);
// }

// function bitwiseOR(n1, n2) {
//   const firstNumArray = binaryArray(n1);
//   const secondNumArray = binaryArray(n2);

//   //compare
//   const binaryORArray = [];
//   for (let i = 0; i < firstNumArray.length; i++) {
//     const digit = firstNumArray[i] === "1" || secondNumArray[i] === "1" ? 1 : 0; // 1's in quotes here because the array elements are strings, not numbers
//     binaryORArray.push(digit);
//   }
//   // convert comparison result back to decimal
//   const binaryORStr = binaryORArray.join("");
//   // return decimal
//   return Number.parseInt(binaryORStr, 2);
// }

// function bitwiseXOR(n1, n2) {
//   const firstNumArray = binaryArray(n1);
//   const secondNumArray = binaryArray(n2);

//   //compare
//   const binaryXORArray = [];
//   for (let i = 0; i < firstNumArray.length; i++) {
//     const digit = firstNumArray[i] === secondNumArray[i] ? 0 : 1; // 1's in quotes here because the array elements are strings, not numbers
//     binaryXORArray.push(digit);
//   }
//   // convert comparison result back to decimal
//   const binaryXORStr = binaryXORArray.join("");
//   // return decimal
//   return Number.parseInt(binaryXORStr, 2);
// }

// --- APPROACH---
// make one main function and add in one of the three operators separately when it's called
// more than just operators though, so might need partial overlap function, and separate functions for comparison logic

// _____________________________________________________________________________
// _____________________________________________________________________________
// _____________________________________________________________________________

// THIRD ATTEMPT

const binaryArray = (originalNum) => originalNum.toString(2).padStart(15, 0);

function bitwise(firstNum, secondNum) {
  const firstNumArray = binaryArray(firstNum);
  const secondNumArray = binaryArray(secondNum);

  //compare
  const binaryComboArray = [];
  for (let i = 0; i < firstNumArray.length; i++) {
    const digit = firstNumArray[i] === "1" && secondNumArray[i] === "1" ? 1 : 0;
    binaryComboArray.push(digit);
  }

  // convert comparison result back to decimal
  const binaryComboStr = binaryComboArray.join("");

  // return decimal
  return Number.parseInt(binaryComboStr, 2);

  // return [firstNumArray, secondNumArray];
}
// console.log(bitwise(7, 12));
// console.log(bitwise(10, 11));

function bitwiseAND(n1, n2) {
  // const zeroOrOne = firstNumArray[i] === "1" && secondNumArray[i] === "1" ? 1 : 0;
  bitwise(n1, n2);
}
// function bitwiseAND(n1) {
//   // const zeroOrOne = firstNumArray[i] === "1" && secondNumArray[i] === "1" ? 1 : 0;
//   bitwise(n1);
// }

console.log(bitwiseAND(7, 12));
console.log(bitwiseAND(10, 11));

// ---APPROACH---
// simpler separate functions, just replace ternary operator logic

// _____________________________________________________________________________
// _____________________________________________________________________________
// _____________________________________________________________________________

// ---ASSUMPTIONS---

// below assumptions based on question instructions:
// highest input is 1023 - not sure why this matters, other than it takes more digits to express in binary
// inputs are strings that start with numbers (or numbers?) only (no booleans or non-number strings)
// only one argument passed to each call of "binary" function

// bitwiseAND returns up to 32bit integer, so max binary will be longer characters

// _____________________________________________________________________________

// ---POSSIBLE EDGE CASES---

// input: none                                     : return error message
// input: empty str, object, or array              : return error message
// input: non-num                                  : return error message
// input: non-int num                              : return error message
// input: only one num                             : return error message
// input: more than two num                        : first two will be converted/ compared, third or more will be ignored

// _____________________________________________________________________________

// // -----TESTS-----

// console.assert(bitwiseAND(7, 12) === 4, "7,12 and should equal 4");
// console.log(bitwiseAND(7, 12));

// console.assert(bitwiseOR(7, 12) === 15, "7,12 or should equal 15");
// console.log(bitwiseOR(7, 12));

// console.assert(bitwiseXOR(7, 12) === 11, "7,12 xor should equal 11");
// console.log(bitwiseXOR(7, 12));
