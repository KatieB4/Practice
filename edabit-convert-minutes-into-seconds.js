// Convert Minutes into Seconds

// Write a function that takes an integer minutes and converts it to seconds.
// Examples

// convert(5) ➞ 300

// convert(3) ➞ 180

// convert(2) ➞ 120

// Notes

//     Don't forget to return the result.
//     If you get stuck on a challenge, find help in the Resources tab.
//     If you're really stuck, unlock solutions in the Solutions tab.


// _____________________________________________________________________________

// -----FIRST SOLVE-----
function convert(minutes) {
	return minutes * 60;
}

//---TESTS---
console.assert(convert(5) === 300);
console.assert(convert(3) === 180);
console.assert(convert(2) === 120);

//---APPROACH---
// multiply the input by 60 and return result


//---ASSUMPTIONS---
// all inputs are positive numbers

//---POSSIBLE EDGE CASES---
// non-number input
// negative number input

// _____________________________________________________________________________