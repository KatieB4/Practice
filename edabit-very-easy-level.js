// Buggy Code (Part 1)
//
// Fix the code in the code tab to pass this challenge (only syntax errors). Look at the examples below to get an idea of what the function should do.
// Examples
//
// cubes(3) ➞ 27
//
// cubes(5) ➞ 125
//
// cubes(10) ➞ 1000
//
// Notes
//
//     READ EVERY WORD CAREFULLY, CHARACTER BY CHARACTER!
//     Don't overthink this challenge; it's not supposed to be hard.
// function cubes(a) {
// 	retunr a ** 3
// }
// -------------
// function cubes(a) {
// 	return Math.pow(a, 3);
// }
// _____________________________________________________________________________
// _____________________________________________________________________________
// Return the First Element in an Array
//
// Create a function that takes an array containing only numbers and return the first element.
// Examples
//
// getFirstValue([1, 2, 3]) ➞ 1
//
// getFirstValue([80, 5, 100]) ➞ 80
//
// getFirstValue([-500, 0, 50]) ➞ -500
//
// Notes
//
// The first element in an array always has an index of 0.
// ----------
// function getFirstValue(arr) {
// 	return arr[0];
// }
// _____________________________________________________________________________
// _____________________________________________________________________________
// Basketball Points
//
// You are counting points for a basketball game, given the amount of 2-pointers scored and 3-pointers scored, find the final points for the team and return that value.
// Examples
//
// points(1, 1) ➞ 5
//
// points(7, 5) ➞ 29
//
// points(38, 8) ➞ 100
//
// Notes
//
// N/A
// ----------
// function points(twoPointers, threePointers) {
// 	return (twoPointers * 2) + (threePointers * 3);
// }
