// Which Function Returns the Larger Number?
//
// Your function will be passed two functions, f and g,
// that don't take any parameters.
// Your function has to call them, and
// return a string which indicates which function returned the larger number.
//
//     If f returns the larger number, return the string f.
//     If g returns the larger number, return the string g.
//     If the functions return the same number, return the string neither.
//
// Examples
//
// whichIsLarger(() => 5, () => 10) ➞ "g"
//
// whichIsLarger(() => 25,  () => 25) ➞ "neither"
//
// whichIsLarger(() => 505050, () => 5050) ➞ "f"
//
// Notes
//
// This exercise is designed as an introduction to higher order functions
// (functions which use other functions to do their work).

// _____________________________________________________________________________

// -----FIRST ATTEMPT-----
// Doesn't work:
// Missing function calls with parentheses.

// function whichIsLarger(f, g) {
//   let string = "";
//   if (f > g) {
//     string = "f";
//   } else if (f < g){
//     string = "g";
//   } else {
//     string = "neither";
//   }
//   return string;
// }
//
// // -----TESTS-----
// console.log(whichIsLarger(() => 5, () => 10) === "g");
// console.log(whichIsLarger(() => 25,  () => 25) === "neither");
// console.log(whichIsLarger(() => 505050, () => 5050) === "f");
//
// console.log(whichIsLarger(5,10) === "g");
// console.log(whichIsLarger(25,25) === "neither");
// console.log(whichIsLarger(505050,5050) === "f");



// -----SECOND ATTEMPT-----
// Doesn't work:
// Converts return from function to string instead of function name to string.
// Don't need String() method.
//
// function whichIsLarger(f, g) {
//   if (f > g) {
//     return String(f);
//   } else if (f < g){
//     return String(g);
//   } else {
//     return "neither";
//   }
// }
//
// // -----TESTS-----
// console.log(whichIsLarger(() => 5, () => 10) === "g");
// console.log(whichIsLarger(() => 25,  () => 25) === "neither");
// console.log(whichIsLarger(() => 505050, () => 5050) === "f");


// -----THIRD SOLVE----- This works.
function whichIsLarger(f, g) {
  if (f() > g()) {
    return "f";
  } else if (f() < g()){
    return "g";
  } else {
    return "neither";
  }
}

// -----TESTS-----
console.log(whichIsLarger(() => 5, () => 10) === "g");
console.log(whichIsLarger(() => 25,  () => 25) === "neither");
console.log(whichIsLarger(() => 505050, () => 5050) === "f");








// _____________________________________________________________________________
