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
function bitwiseAND(n1, n2) {
  const convertToBinary = (decimal) => decimal.toString(2);
  const firstNumArray = [...convertToBinary(n1).padStart(10, 0)];
  const secondNumArray = [...convertToBinary(n2).padStart(10, 0)];

  // return `${firstNum}, ${secondNum}`;
  // return firstNumArray;

  //compare
  const binaryAndArray = [];
  for (let i = 0; i < firstNumArray.length; i++) {
    const digit = firstNumArray[i] === "1" && secondNumArray[i] === "1" ? 1 : 0; // 1's in quotes here because the array elements are strings, not numbers
    binaryAndArray.push(digit);
  }
  // return binaryAnd;

  // convert comparison result back to decimal
  const binaryAndStr = binaryAndArray.join("");

  // return decimal
  return Number.parseInt(binaryAndStr, 2);
}

// ---APPROACH---
// (I see that there are already operators for this built into js, but want to try developing myself first.)

// convert each input to binary
// pad each at start for some max length for easier comparison (instead of comparing two numbers with different number of digits)
// compare the two binary numbers, depending on "AND", "OR", or "XOR" requirement, with single binary result
// convert that binary result back to decimal
// return decimal number in from function

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

// input: 0                                        : return 0
// input: none                                     : return error message
// input: empty str, object, or array              : return error message
// input: non-str, non-num                         : return error message
// input: non-int str that starts with num         : convert to int (remove digits right of decimal)
// input: str that starts with a number then text  : parse the number, convert to integer if necessary, convert that integer to binary
// input: more than one str num                    : first will be converted, second input will be ignored

// _____________________________________________________________________________

// // -----TESTS-----

console.log(bitwiseAND(7, 12));

// console.log("0".padEnd(30, " >"), binary(0));
// console.log("0".padEnd(30, " >"), binary("0"));
// console.log("85".padEnd(30, " >"), binary(85));
// console.log("10".padEnd(30, " >"), binary("10"));
// console.log("-10".padEnd(30, " >"), binary(-10));
// console.log("     9     ".padEnd(30, " >"), binary("     9     "));
// console.log(
//   "test non number string".padEnd(30, " >"),
//   binary("test non number string")
// );
// console.log("3b".padEnd(30, " >"), binary("3b"));
// console.log("16test".padEnd(30, " >"), binary("16test"));
// console.log("12 test".padEnd(30, " >"), binary("12 test"));
// console.log("-32 test".padEnd(30, " >"), binary("-32 test"));
// console.log(" test 22".padEnd(30, " >"), binary(" test 22"));
// console.log("1023".padEnd(30, " >"), binary("1023"));
// console.log("1024".padEnd(30, " >"), binary("1024"));
// console.log("27.5".padEnd(30, " >"), binary("27.5"));
// console.log("true".padEnd(30, " >"), binary(true));
// console.log(`10, 11`.padEnd(30, " >"), binary("10", "11"));
// console.log("()".padEnd(30, " >"), binary());
// console.log("''".padEnd(30, " >"), binary(""));
// console.log("[]".padEnd(30, " >"), binary([]));
// console.log("{}".padEnd(30, " >"), binary({}));

// console.assert(binary("10") === 1010, "no error");
//   binary("test non number string") === "test non number string",
