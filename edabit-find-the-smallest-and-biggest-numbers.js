// Find the Smallest and Biggest Numbers
//
// Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order.
// Examples
//
// minMax([1, 2, 3, 4, 5]) ➞ [1, 5]
//
// minMax([2334454, 5]) ➞ [5, 2334454]
//
// minMax([1]) ➞ [1, 1]
//
// Notes
//
// All test arrays will have at least one element and are valid.

// _____________________________________________________________________________

// -----FIRST SOLVE-----
function minMax(arr) {

  let minimum = Math.min(...arr);
  let maximum = Math.max(...arr);
  return [minimum, maximum]

}

// // -----TESTS-----
// console.log(minMax([1,2,3,4,5]) === [1,5]);
// console.log(minMax([2334454, 5]) === [5, 2334454]);
// console.log(minMax([1]) === [1, 1]);



// _____________________________________________________________________________
// -----SECOND ATTEMPT-----
// **already passed with above work in Edabit, but my tests aren't passing in chrome dev tools.
// I think the syntax is wrong for the tests?


function minMax(arr) {

  let minimum = Math.min(...arr);
  let maximum = Math.max(...arr);
  let array = [];
  array.push(minimum);
  array.push(maximum);
  return array;

}

// // -----TESTS-----
console.log(minMax([1, 2, 3, 4, 5]) === [1, 5]);
console.log(minMax([2334454, 5]) == [5, 2334454]);
console.log(minMax([1]) === [1, 1]);




// _____________________________________________________________________________
