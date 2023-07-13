"use strict";

// Convert a Number to Base-2

// Create a function that returns a base-2 (binary) representation of a base-10 (decimal) string number. To convert is simple: ((2) means base-2 and (10) means base-10) 010101001(2) = 1 + 8 + 32 + 128.

// Going from right to left, the value of the most right bit is 1, now from that every bit to the left will be x2 the value, value of an 8 bit binary numbers are (256, 128, 64, 32, 16, 8, 4, 2, 1).
// Examples

// binary(1) ➞ "1"
// // 1*1 = 1

// binary(5) ➞ "101"
// // 1*1 + 1*4 = 5

// binary(10) ➞ "1010"
// // 1*2 + 1*8 = 10

// Notes

//     Numbers will always be below 1024 (not including 1024).
//     The && operator could be useful.
//     The strings will always go to the length at which the most left bit's value gets bigger than the number in decimal.
//     If a binary conversion for 0 is attempted, return "0".

// _____________________________________________________________________________
// _____________________________________________________________________________

// -----FIRST ATTEMPT-----
// function binary(decimal) {
//   let newDecimal = Math.abs(decimal);
//   let binaryDigitList = [];

//   while (newDecimal > 0) {
//     let binaryNum = parseInt(Number(newDecimal) % 2);
//     binaryDigitList.push(binaryNum);
//     newDecimal = parseInt(Number(newDecimal) / 2);
//   }

//   binaryDigitList = Number(binaryDigitList.reverse().join(""));

//   return binaryDigitList;
// }

// ---APPROACH---
// set up if else comparisons for inputs
// convert inputs in if/else statement to numbers (function takes a string input)
// create array to store binary digits
// create loop to continuously divide the number by 2 (modulo and regular division)
// flip array and convert to number instead of array

// _____________________________________________________________________________
// _____________________________________________________________________________

// -----SECOND ATTEMPT----- // changing parstInt to trunc because im just removing decimal from a number rather than extracting from string; also including comments from all the things I tried for reference. See 3rd attempt for cleaned up version

// function binary(decimal) {
//   // decimal = Number(decimal); // converts non number strings to numbers
//   // decimal = parseInt(decimal); // converts non number strings to numbers
//   decimal = parseFloat(decimal);
//   // decimal = +decimal; // converts non number strings to numbers

//   // without some above manipulation, "Please input a number" is passed with all strings (all inputs should be string numbers), so all inputs are skipped
//   // if allow strings also in below if statement, then non-number strings are also allowed

//   // all above number check's don't work because NaN's data type is also number, so add a special "if" case that if result of above is NaN, don't proceed

//   // return `${typeof decimal}: ${decimal}`;

//   // if (decimal === "NaN") {
//   //   return "NotaNumber";
//   // } else return decimal;

//   // return decimal;

//   if (
//     Number.isNaN(decimal)
//     // decimal === "NaN"
//     // if (
//     // typeof decimal !== "string" &&
//     // typeof decimal !== "number"
//     // || typeof decimal === "NaN"
//   ) {
//     // if (typeof decimal !== "number") {
//     return "Please input a number";
//   }
//   // else return decimal;
//   else {
//     let binaryDigitList = [];

//     while (decimal > 0) {
//       let binaryNum = Math.trunc(decimal) % 2;
//       binaryDigitList.push(binaryNum);
//       decimal = Math.trunc(decimal) / 2;
//     }

//     binaryDigitList = Number(binaryDigitList.reverse().join(""));

//     return binaryDigitList;
//   }
// }

// ---APPROACH---
// convert inputs to numbers (function takes a string input)
// set up if else comparisons for inputs
// create array to store binary digits
// create loop to continuously divide the number by 2 (modulo and regular division)
// flip array and convert to number instead of array

// _____________________________________________________________________________
// _____________________________________________________________________________

// -----THIRD ATTEMPT-----
// function binary(decimal) {
//   decimal = parseFloat(decimal);

//   if (Number.isNaN(decimal)) {
//     return "Please input a number";
//   } else {
//     let binaryDigitList = [];

//     while (decimal > 0) {
//       let binaryNum = Math.trunc(decimal) % 2;
//       binaryDigitList.push(binaryNum);
//       decimal = Math.trunc(decimal) / 2;
//     }

//     binaryDigitList = Number(binaryDigitList.reverse().join(""));

//     return binaryDigitList;
//   }
// }

// ---APPROACH---
// convert inputs to numbers (function takes a string input)
// set up if else comparisons for inputs
// create array to store binary digits
// create loop to continuously divide the number by 2 (modulo and regular division)
// flip array and convert to number instead of array

// for negative inputs: while loop relies on number greater than 0, so would need to store the fact that this is negative elsewhere until after binary generating loop

// _____________________________________________________________________________
// _____________________________________________________________________________

// -----FOURTH ATTEMPT-----
// function binary(decimal) {
//   return parseInt(decimal, 10);
// }

// function convertToBase10(binaryNum) {
//   return parseInt(binaryNum, 2);
// }

// console.log(convertToBase10(101, 2)); // 5
// console.log(convertToBase10("101x", 2)); // 5
// console.log(convertToBase10("10000", 2)); //16
// console.log(convertToBase10("1011", 2)); // 11
// console.log("-------------binary to base10 above-------------");
// console.log("-------------base10 to binary below-------------");
// console.log(binary("25"));
// console.log(binary("25x"));
// console.log(binary("-1"));
// console.log(binary("0"));
// console.log(binary("text test"));
// console.log(binary("101"));
// console.log(binary("8.2"));

// ---APPROACH---
// use parseint with radix to define as base 2 instead of 10
// ---NOTE--- this doesn't work because parseInt is meant to pull out an integer result, not binary, so it can convert from binary to integer, but not from integer to binary

// _____________________________________________________________________________
// -----FIFTH ATTEMPT-----

// function binary(decimal) {
//   // const base10Num = +decimal; // this also works
//   const base10Num = Number(decimal);
//   return base10Num.toString(2);
// }

// ---APPROACH---
// use toString i/o parseInt due to above issue -
// see stack overflow explanation of how to convert: (https://stackoverflow.com/questions/31126364/parseint-not-converting-decimal-to-binary)
// see toString mdn explaining that it takes radix parameter also: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toString

// _____________________________________________________________________________
// _____________________________________________________________________________

// -----SIXTH ATTEMPT-----
// function binary(decimal) {
//   decimal = parseFloat(decimal);

//   if (Number.isNaN(decimal)) {
//     return "Please input a string that starts with a number";
//   } else {
//     const base10Int = Math.trunc(decimal);
//     return base10Int.toString(2);
//   }
// }

// ---APPROACH---
// combining above ideas to sort out inputs that are not numbers/ numbers as strings (from 3rd attempt), but simplify the conversion (from 5th attempt)
// this method also does not rely on the while loop, which only takes positive number inputs to convert

// -----SEVENTH ATTEMPT-----
function binary(decimal) {
  const integerToConvert = parseInt(decimal, 10);

  if (Number.isNaN(integerToConvert)) {
    return "Please input a string that starts with a number";
  } else {
    return integerToConvert.toString(2);
  }
}

// ---APPROACH---
// combining parseFloat and Math.trunc, so not repeating steps to have an integer to work with

// _____________________________________________________________________________
// _____________________________________________________________________________
// _____________________________________________________________________________

// ---ASSUMPTIONS---

// below assumptions based on question instructions:
// highest input is 1023 - not sure why this matters, other than it takes more digits to express in binary
// inputs are strings that start with numbers (or numbers?) only (no booleans or non-number strings)
// only one argument passed to each call of "binary" function

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

console.log("0".padEnd(30, " >"), binary(0));
console.log("0".padEnd(30, " >"), binary("0"));
console.log("85".padEnd(30, " >"), binary(85));
console.log("10".padEnd(30, " >"), binary("10"));
console.log("-10".padEnd(30, " >"), binary(-10));
console.log("     9     ".padEnd(30, " >"), binary("     9     "));
console.log(
  "test non number string".padEnd(30, " >"),
  binary("test non number string")
);
console.log("3b".padEnd(30, " >"), binary("3b"));
console.log("16test".padEnd(30, " >"), binary("16test"));
console.log("12 test".padEnd(30, " >"), binary("12 test"));
console.log("-32 test".padEnd(30, " >"), binary("-32 test"));
console.log(" test 22".padEnd(30, " >"), binary(" test 22"));
console.log("1023".padEnd(30, " >"), binary("1023"));
console.log("1024".padEnd(30, " >"), binary("1024"));
console.log("27.5".padEnd(30, " >"), binary("27.5"));
console.log("true".padEnd(30, " >"), binary(true));
console.log(`10, 11`.padEnd(30, " >"), binary("10", "11"));
console.log("()".padEnd(30, " >"), binary());
console.log("''".padEnd(30, " >"), binary(""));
console.log("[]".padEnd(30, " >"), binary([]));
console.log("{}".padEnd(30, " >"), binary({}));

// console.assert(binary("10") === 1010, "no error");
// console.assert(binary("0") === 0, "no error");
// console.assert(
//   binary("test non number string") === "test non number string",
//   "binary function only takes integer string inputs"
// );
// console.assert(binary("35") === 100011, "no error");
// console.assert(binary("1024") === 10000000000, "no error");
// // console.assert(binary("-1024") === -10000000000, "no error");
// // console.assert(binary("27.5") === 11011); // need to do more calculations for this one
// console.assert(
//   binary(true) === "true",
//   "binary function only takes integer string inputs"
// );
