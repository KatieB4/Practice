// Is it Time for Milk and Cookies?

// Christmas Eve is almost upon us, so naturally we need to prepare some milk and cookies for Santa! Create a function that accepts a Date object and returns true if it's Christmas Eve (December 24th) and false otherwise. Keep in mind JavaScript's Date month is 0 based, meaning December is the 11th month while January is 0.
// Examples

// timeForMilkAndCookies(new Date(2013, 11, 24)) ➞ true

// timeForMilkAndCookies(new Date(2013, 0, 23)) ➞ false

// timeForMilkAndCookies(new Date(3000, 11, 24)) ➞ true

// Notes

//     Dates are zero zero based (see resources).
//     All test cases contain valid dates.

// _____________________________________________________________________________
// -----FIRST SOLVE- Attempt 1-----
// function timeForMilkAndCookies(date) {
//     let inputDate = new Date(date);

//     let inputMonth = inputDate.getMonth();
//     let inputDay = inputDate.getDay();

//     if (inputMonth === 11 && inputDay === 24){
//         return true;
//     } else {
//         return false;
//     }

// }

// let today = new Date();
// let thisMonth = today.getMonth();
// console.log(thisMonth);

// -----TESTS-----
// console.log(timeForMilkAndCookies(new Date(2013, 11, 24))); // returns true
// console.log(timeForMilkAndCookies(new Date(2013, 0, 23))); // returns false
// console.log(timeForMilkAndCookies(new Date(3000, 11, 24))); // returns true


// When looking at tests section of edabit challenge, I saw that the new date constructor is part of the input, so it doesn't need to be part of the fuction itself, which doesn't work as I was trying above.

// -----FIRST SOLVE- Attempt 2-----
function timeForMilkAndCookies(date) {

    let inputMonth = date.getMonth();
    let inputDay = date.getDate();
  
    if (inputMonth === 11 && inputDay === 24){
        return true;
    } else {
        return false;
    }

  }

  // -----TESTS-----
console.log(timeForMilkAndCookies(new Date(2013, 11, 24))); // returns true
console.log(timeForMilkAndCookies(new Date(2013, 0, 23))); // returns false
console.log(timeForMilkAndCookies(new Date(3000, 11, 24))); // returns true


// _____________________________________________________________________________