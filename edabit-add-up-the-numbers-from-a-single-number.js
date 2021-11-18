// Add up the Numbers from a Single Number
//
// Create a function that takes a number as an argument. Add up all the numbers from 1 to the number you passed to the function.
// For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.
// Examples
//
// addUp(4) ➞ 10
//
// addUp(13) ➞ 91
//
// addUp(600) ➞ 180300
//
// Notes
//
// Expect any positive number between 1 and 1000.

// _____________________________________________________________________________

// -----FIRST SOLVE-----

// function addUp(num) {
//   var numArray = [];
//   for (var count = 1; count<num+1; count++){
//     numArray.push(count);
//   }
//
//   var runningTotal =[0];
//   for (var index= 0; index<num; index++){
//
//     var nextNum = numArray[index] + runningTotal[index];
//
//     runningTotal.push(nextNum);
//
//   }
//
// console.log(numArray);
// console.log(runningTotal);
// return runningTotal[num];
//
// }

// -----SECOND SOLVE-----

// function addUp(num) {
//
//   let count = 1;
//   let runningTotal = [0];
//   for (let index = 0; index < num; index++) {
//     let nextNum = count + runningTotal[index];
//     runningTotal.push(nextNum);
//     count++
//   }
//
//   return runningTotal[num];
//
// }
//
// // TESTS
// console.log(addUp(4) === 10);
// console.log(addUp(13) === 91);
// console.log(addUp(600) === 180300);


// -----THIRD SOLVE-----

function addUp(num) {

  let count = 1;
  let runningTotal = 0;
  for (let index= 0; index<num; index++){
    let nextNum = count + runningTotal;
    runningTotal = nextNum;
    count++

  }

return runningTotal;

}

// TESTS
console.log(addUp(4) === 10);
console.log(addUp(13) === 91);
console.log(addUp(600) === 180300);
