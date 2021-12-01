// What's Hiding Amongst the Crowd?
//
// A word is on the loose and now has tried to hide amongst a crowd of tall letters! Help write a function to detect what the word is, knowing the following rules:
//
//     The wanted word is in lowercase.
//     The crowd of letters is all in uppercase.
//     Note that the word will be spread out amongst the random letters, but their letters remain in the same order.
//
// Examples
//
// detectWord("UcUNFYGaFYFYGtNUH") ➞ "cat"
//
// detectWord("bEEFGBuFBRrHgUHlNFYaYr") ➞ "burglar"
//
// detectWord("YFemHUFBbezFBYzFBYLleGBYEFGBMENTment") ➞ "embezzlement"
//
// Notes
// N/A

// _____________________________________________________________________________

// -----FIRST SOLVE-----
// function detectWord(str) {
//   let inputString = str;
//   let inputAsArray = inputString.split("");
//
//   let spellWord = [];
//
//   for (let letterIndex = 0; letterIndex < inputAsArray.length; letterIndex++) {
//     let letter = inputAsArray[letterIndex];
//     if (letter === letter.toLowerCase() && letter != letter.toUpperCase()) {
//       spellWord.push(letter);
//     }
//   }
//
//   return spellWord.join("");
//
// }
//
// // TESTS
// console.log(detectWord("UcUNFYGaFYFYGtNUH") === "cat");
// console.log(detectWord("bEEFGBuFBRrHgUHlNFYaYr") === "burglar");
// console.log(detectWord("YFemHUFBbezFBYzFBYLleGBYEFGBMENTment") === "embezzlement");


// -----SECOND SOLVE-----
// function detectWord(str) {
//   let inputAsArray = str.split("");
//   let spellWord = [];
//
//   for (let letterIndex = 0; letterIndex < inputAsArray.length; letterIndex++) {
//     let letter = inputAsArray[letterIndex];
//     if (letter === letter.toLowerCase() && letter != letter.toUpperCase()) {
//       spellWord.push(letter);
//     }
//   }
//
//   return spellWord.join("");
//
// }
//
// // TESTS
// console.log(detectWord("UcUNFYGaFYFYGtNUH") === "cat");
// console.log(detectWord("bEEFGBuFBRrHgUHlNFYaYr") === "burglar");
// console.log(detectWord("YFemHUFBbezFBYzFBYLleGBYEFGBMENTment") === "embezzlement");

// -----THIRD SOLVE-----
function detectWord(str) {

  let finalWord = "";

  for (let letterIndex = 0; letterIndex < str.length; letterIndex++){
    let letter = str.charAt(letterIndex);
    if (letter === letter.toLowerCase() && letter != letter.toUpperCase()){
      finalWord += letter;
    }
  }

  return finalWord;

}

// TESTS
console.log(detectWord("UcUNFYGaFYFYGtNUH") === "cat");
console.log(detectWord("bEEFGBuFBRrHgUHlNFYaYr") === "burglar");
console.log(detectWord("YFemHUFBbezFBYzFBYLleGBYEFGBMENTment") === "embezzlement");











// _____________________________________________________________________________
