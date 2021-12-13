// Find the Amount of Potatoes

// Create a function to return the amount of potatoes there are in a string.
// Examples

// potatoes("potato") ➞ 1

// potatoes("potatopotato") ➞ 2

// potatoes("potatoapple") ➞ 1

// Notes

// N/A

// _____________________________________________________________________________

// -----FIRST SOLVE-----

function potatoes(str) {
  
    let allThePotatoes = str.match(/potato/gi);
  
    return allThePotatoes.length;
  
  }
  
  console.log(potatoes("potato") === 1);
  console.log(potatoes("potatopotato") === 2);
  console.log(potatoes("potatoapple") === 1);



























// _____________________________________________________________________________