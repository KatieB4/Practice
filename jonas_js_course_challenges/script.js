//------------------------- 5/29/24 ------------------------------------------------------------
"use strict";

// ---------------------------------------------------------------------------------------------
// SECTION 2 CHALLENGE 1
// ---------------------------------------------------------------------------------------------

// BMI=mass/(height*height)

// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

// const massMark = 95;
// const heightMark = 1.88;
// const massJohn = 85;
// const heightJohn = 1.76;

// const BMIMark = massMark / heightMark ** 2;
// const BMIJohn = massJohn / heightJohn ** 2;

// const BMIMark = massMark / (heightMark * heightMark);
// const BMIJohn = massJohn / (heightJohn * heightJohn);

// const markHigherBMI = BMIMark > BMIJohn;

// console.log(BMIMark, BMIJohn, markHigherBMI);

// ---------------------------------------------------------------------------------------------
// SECTION 2 CHALLENGE 2
// ---------------------------------------------------------------------------------------------
// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

// const BMIMark = massMark / (heightMark * heightMark);
// const BMIJohn = massJohn / (heightJohn * heightJohn);
// console.log(BMIMark, BMIJohn);

// if (BMIMark > BMIJohn) {
//   console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`);
// } else if (BMIJohn > BMIMark) {
//   console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`);
// } else console.log(`Mark and John's BMIs are equal.`);

// ---------------------------------------------------------------------------------------------
// SECTION 2 CHALLENGE 3
// ---------------------------------------------------------------------------------------------

// const dolphinsScore1 = 96;
// const dolphinsScore2 = 108;
// const dolphinsScore3 = 89;

// const koalasScore1 = 88;
// const koalasScore2 = 91;
// const koalasScore3 = 110;

// const koalasScore1 = 96;
// const koalasScore2 = 108;
// const koalasScore3 = 89;

// const scoreDolphins = (dolphinsScore1 + dolphinsScore2 + dolphinsScore3) / 3;
// const scoreKoalas = (koalasScore1 + koalasScore2 + koalasScore3) / 3;

// if (scoreDolphins > scoreKoalas) {
//   console.log("Dolphins win the trophy");
// } else if (scoreKoalas > scoreDolphins) {
//   console.log("Koalas win the trophy");
// } else console.log("Both win the trophy");

// ---------------------------------------------------------------------------------------------
// SECTION 2 CHALLENGE 4
// ---------------------------------------------------------------------------------------------
// const bill = 275;
// const bill = 40;
// const bill = 430;

// let tipPercent = bill >= 50 && bill <= 300 ? 0.15 : 0.2;
// let tip = bill * tipPercent;

// console.log(
//   `The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}.`
// );

// ---------------------------------------------------------------------------------------------
// SECTION 3 CHALLENGE 1
// ---------------------------------------------------------------------------------------------

// const calcAverage = (score1, score2, score3) => {
//   return (score1 + score2 + score3) / 3;
// };

// const scoreDolphins = (s1, s2, s3) => calcAverage(s1, s2, s3);

// const scoreKoalas = (s1, s2, s3) => calcAverage(s1, s2, s3);

// as arrow function expression:
// const checkWinner = (avgDolphins, avgKoalas) => {
//   if (avgDolphins > 2 * avgKoalas) {
//     console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
//   } else if (avgKoalas > 2 * avgDolphins) {
//     console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
//   } else console.log("No team wins...");
//   return avgDolphins, avgKoalas;
// };

// as function declaration:
// function checkWinner(avgDolphins, avgKoalas) {
//   if (avgDolphins > 2 * avgKoalas) {
//     console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
//   } else if (avgKoalas > 2 * avgDolphins) {
//     console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
//   } else console.log("No team wins...");
//   return avgDolphins, avgKoalas;
// }

// checkWinner(scoreDolphins(44, 23, 71), scoreKoalas(65, 54, 49));
// checkWinner(scoreDolphins(85, 54, 41), scoreKoalas(23, 34, 27));

// ---------------------------------------------------------------------------------------------
// SECTION 3 CHALLENGE 2
// ---------------------------------------------------------------------------------------------
// const calcTip = (bill) => {
//   const tipPercent = bill >= 50 && bill <= 300 ? 0.15 : 0.2;
//   const tip = bill * tipPercent;
//   return tip;
// };

// const bills = [125, 555, 44];

// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

// const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

// console.log(totals);

// ---------------------------------------------------------------------------------------------
// SECTION 3 Practice
// ---------------------------------------------------------------------------------------------

// const jonas = {
//   fName: "Jonas",
//   friends: ["Michael", "Steve", "John"],
//   birthYear: 1991,
//   job: "teacher",
//   hasDL: true,

// calcAge: function (birthYear) {
//   return 2037 - birthYear;
// },

// calcAge: function () {
//   // console.log(this);
//   return 2037 - this.birthYear;
// },

// calcAge: function () {
//   this.age = 2037 - this.birthYear;
//   return this.age;
// },

// getSummary: function () {
// console.log(
//   `${this.fName} is a ${this.age}-year-old ${this.job}, and he has ${
//     this.hasDL ? "a" : "no"
//   } driver's license.`
// );

//     return `${this.fName} is a ${this.calcAge()}-year-old ${
//       this.job
//     }, and he has ${this.hasDL ? "a" : "no"} driver's license.`;
//   },
// };

// console.log(
//   `${jonas.fName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}.`
// );

// console.log(jonas.calcAge(1991));
// console.log(jonas["calcAge"](1991));
// console.log(jonas["fName"]);

// * Must invoke the calcAge function before can access age property of jonas object.
// jonas.calcAge();
// console.log(jonas.age);

// console.log(jonas.getSummary());

// ---------------------------------------------------------------------------------------------
// SECTION 3 CHALLENGE 3
// ---------------------------------------------------------------------------------------------

// BMI = mass/ height*height
// mass in kg height in m

// const mark = {
//   fullName: "Mark Miller",
//   mass: 78,
//   height: 1.69,

//   calcBMI: function () {
//     this.bmi = this.mass / (this.height * this.height);
//     return this.bmi;
//   },
// };

// const john = {
//   fullName: "John Smith",
//   mass: 92,
//   height: 1.95,

//   calcBMI: function () {
//     this.bmi = this.mass / (this.height * this.height);
//     return this.bmi;
//   },
// };

// if (mark.calcBMI() > john.calcBMI()) {
//   console.log(
//     `${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})!`
//   );
// } else if (john.calcBMI() > mark.calcBMI()) {
//   console.log(
//     `${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})!`
//   );
// }

// below idea to use higher and lower as variables for object constants doesn't work- don't know reason:
// let higher;
// let lower;

// if (mark.calcBMI() > john.calcBMI()) {
//   higher = "mark";
//   lower = "john";
// } else if (john.calcBMI() > mark.calcBMI()) {
//   higher = "john";
//   lower = "mark";
// }

// console.log(higher, lower);
// console.log(typeof higher);

// console.log(higher[fullName]);

// console.log(
//   `${higher.fullName}'s BMI (${higher.bmi}) is higher than ${lower.fullName}'s (${lower.bmi})!`
// );

// ---------------------------------------------------------------------------------------------
// SECTION 3 Notes/ Practice
// ---------------------------------------------------------------------------------------------

// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`rep #${rep}`);
// }

// const jonasArray = [
//   "jonas",
//   "schmedtmann",
//   2037 - 1991,
//   "teacher",
//   ["Michael", "Peter", "Steven"],
// ];

// const types = [];

// for (let i = 0; i < jonasArray.length; i++) {
//   console.log(jonasArray[i], typeof jonasArray[i]);
//   types[i] = typeof jonasArray[i];
//   types.push(typeof jonasArray[i]);
// }

// console.log(types);

// for (let exercise = 1; exercise < 4; exercise++) {
//   console.log(`-----Starting exercise: ${exercise}`);

//   for (let rep = 1; rep < 6; rep++) {
//     console.log(`rep#${rep}`);
//   }
// }

// let diceRoll = Math.trunc(Math.random() * 6) + 1;
// while (diceRoll != 6) {
//   console.log(diceRoll);
//   diceRoll = Math.trunc(Math.random() * 6) + 1;
// }

// ---------------------------------------------------------------------------------------------
// SECTION 3 CHALLENGE 4
// ---------------------------------------------------------------------------------------------

// const calcTip = function (bill) {
//   let tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
//   return tip;
// };

// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// const tips = [];
// const totals = [];

// for (let i = 0; i < bills.length; i++) {
//   const tipAmt = calcTip(bills[i]);
//   // tips.push(tipAmt);
//   tips.push(`$${tipAmt.toFixed(2)}`);
//   const total = tipAmt + bills[i];
//   totals.push;
//   // totals.push(total);
//   totals.push(`$${total.toFixed(2)}`);
// }
// console.log(tips);
// console.log(totals);

// ---------------------------------------------------------------------------------------------
// SECTION 3 CHALLENGE 4 BONUS
// ---------------------------------------------------------------------------------------------

// const calcAverage = function (arr) {
//   let sum = 0;

//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   return sum / arr.length;
// };

// console.log(calcAverage([1, 2, 3]));

// ---------------------------------------------------------------------------------------------
// SECTION 5 CHALLENGE 1
// ---------------------------------------------------------------------------------------------

// const forecastTemps = [17, 21, 23];
// // const forecastTemps = [12, 5, -5, 0, 4];

// const printForecast = function (temps) {
//   let forecastString = "... ";
//   for (let i = 0; i < temps.length; i++) {
//     forecastString += `${temps[i]}°C in ${i + 1} days ... `;
//   }
//   return forecastString;
// };

// console.log(printForecast(forecastTemps));

// ---------------------------------------------------------------------------------------------
// SECTION 9 CHALLENGE 1
// ---------------------------------------------------------------------------------------------

// const game = {
//   team1: "Bayern Munich",
//   team2: "Borrussia Dortmund",
//   players: [
//     [
//       "Neuer",
//       "Pavard",
//       "Martinez",
//       "Alaba",
//       "Davies",
//       "Kimmich",
//       "Goretzka",
//       "Coman",
//       "Muller",
//       "Gnarby",
//       "Lewandowski",
//     ],
//     [
//       "Burki",
//       "Schulz",
//       "Hummels",
//       "Akanji",
//       "Hakimi",
//       "Weigl",
//       "Witsel",
//       "Hazard",
//       "Brandt",
//       "Sancho",
//       "Gotze",
//     ],
//   ],
//   score: "4:0",
//   scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
//   date: "Nov 9th, 2037",
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

/// #1
// MINE:
// const players1 = [...game.players[0]];
// const players2 = [...game.players[1]];
// HIS:
// const [players1, players2] = game.players;
// console.log(players1, players2);

/// #2
// const [gkMunich, ...fieldPlayersMunich] = players1;

// /// #3
// const allPlayers = [...players1, ...players2];

// /// #4
// const players1Final = [...players1, "Tiago", "Coutinho", "Perisic"];

/// #5
// MINE:
// const team1 = game.odds.team1;
// const team2 = game.odds.team2;
// const draw = game.odds.x;
// HIS:
// const {
//   odds: { team1, x: draw, team2 },
// } = game;
// console.log(team1, draw, team2);

/// #6
// const printGoals = function (...nameList) {
//   // console.log(...nameList);

//   let numScorers = 0;
//   for (let i = 0; i < nameList.length; i++) {
//     console.log(nameList[i]);

//     numScorers++;
//   }
//   console.log(numScorers);
// };

// printGoals("Davies", "Muller", "Lewandowski", "Kimmich");
// printGoals(...game.scored);

/// #7
// MY ATTEMPTS:
// console.log(game.odds);
// if (team1 < team2) {
//   console.log("Team 1 is likely to win.");
// } else if (team2 < team1) {
//   console.log("Team 2 is likely to win.");
// } else console.log("Draw is likely");

// const likelyWinner = team1 < team2 ? "team 1" : "team 2";
// console.log(likelyWinner);

// const probableWinner = team1 < team2 || team2 < team1;
// console.log(probableWinner);
// const probableWinner2 = team1 < team2 && team2 < team1;
// console.log(probableWinner2);

// rest2.owner = rest1.owner && "Anonymous";
// rest2.owner = rest2.owner && "Anonymous";

// let likelyToWin = team1 < team2 && "Team 1";
// likelyToWin = team2 < team1 && "Team 2";

// console.log(`${likelyToWin} is most likely to win.`);

// console.log(true && false);
// console.log(true || false);

// console.log(false && true);
// console.log(false || true);
// MINE after watching most of his:
// team1 < team2 && console.log("Team 1");
// team2 < team1 && console.log("Team 2");
// below method works, but makes less sense, as you're looking for the team with fewer points, so better to use less than symbol and AND operator
// team1 > team2 || console.log("Team 1");
// team2 > team1 || console.log("Team 2");

//HIS:
// team1 < team2 && console.log("Team 1 is more likely to win.");
// team2 < team1 && console.log("Team 2 is more likely to win.");

// ---------------------------------------------------------------------------------------------
// SECTION 9 CHALLENGE 2
// ---------------------------------------------------------------------------------------------
// const game = {
//   team1: "Bayern Munich",
//   team2: "Borrussia Dortmund",
//   players: [
//     [
//       "Neuer",
//       "Pavard",
//       "Martinez",
//       "Alaba",
//       "Davies",
//       "Kimmich",
//       "Goretzka",
//       "Coman",
//       "Muller",
//       "Gnarby",
//       "Lewandowski",
//     ],
//     [
//       "Burki",
//       "Schulz",
//       "Hummels",
//       "Akanji",
//       "Hakimi",
//       "Weigl",
//       "Witsel",
//       "Hazard",
//       "Brandt",
//       "Sancho",
//       "Gotze",
//     ],
//   ],
//   score: "4:0",
//   scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
//   date: "Nov 9th, 2037",
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

/// #1 MY SOLUTION
// console.log(game.scored);
// console.log(...game.scored.entries());

// for (const [index, player] of game.scored.entries())
//   console.log(`Goal ${index + 1}: ${player}`);

// #2 HIS SOLUTION
// const odds = Object.values(game.odds);
// let average = 0;
// for (const odd of odds) // more specific, only pulls values instead of whole key:value pair like entries does
//   average += odd;
// average /= odds.length;
// console.log(average);

// #2 MY SOLUTION
// console.log(game.odds);
// console.log(...game.odds.entries()); //doesn't work because object, not array
// const oddsObject = Object.entries(game.odds);
// let chanceTotal = 0;

// for (const [team, chance] of oddsObject) {
//   chanceTotal += chance;
// }
// const averageOdd = chanceTotal / oddsObject.length;

// console.log(`Average odd: ${averageOdd}`);

// #3 HIS SOLUTION
// for (const [team, odd] of Object.entries(game.odds)) {
//   const teamStr = team === "x" ? "draw" : `victory ${game[team]}`; //solved some of this myself with hints from his video
//   console.log(`Odd of ${teamStr}: ${odd}`);
// }

// #3 MY SOLUTION- INCOMPLETE
// const gameObject = Object.entries(game);
// console.log(gameObject); //need items 0, 1 for 3 and 6 for 4 below

// const [t1, t2] = gameObject;
// const [num1, equipo1] = t1;
// const [num2, equipo2] = t2;

// const [numba2, tm2] = gameObject[1];
// console.log(tm2);

// console.log(oddsObject[2]);
// const [[team, odd]] = oddsObject[];
// console.log(team);

// const [team, odd] = oddsObject;
// console.log(team);

// console.log(`Odd of victory ${equipo1}: ODD`);
// console.log(`Odd of draw: ODD`);
// console.log(`Odd of victory ${equipo2}: ODD`);

// console.log(`Odd of victory ${game.team1}: ${game.odds.team1}`);

// #4 MY SOLUTION
// let scorers = {};

// for (const player of game.scored) {
// if (!scorers[player]) {
//   scorers[player] = 1;
// } else scorers[player]++;

// !scorers[player] ? (scorers[player] = 1) : scorers[player]++; //my solution after seeing his
// }
// console.log(scorers);

// MY PROCESS
// check if name is already in object
// if name is already in object, increase count
// if not put name into object as key with count of 1 for value
// const scoringPlayer = !scorers?.[player].scorers[player]; // this is the wrong use of optional chainging

// #4 HIS SOLUTION
// const scorers = {};
// for (const player of game.scored) {
//   scorers[player] ? scorers[player]++ : (scorers[player] = 1);
// }
// console.log(scorers);

// ---------------------------------------------------------------------------------------------
// SECTION 9 CHALLENGE 3
// ---------------------------------------------------------------------------------------------

// const gameEvents = new Map([
//   [17, "⚽ GOAL"],
//   [36, "🔁 Substitution"],
//   [47, "⚽ GOAL"],
//   [61, "🔁 Substitution"],
//   [64, "🔶 Yellow card"],
//   [69, "🔴 Red card"],
//   [70, "🔁 Substitution"],
//   [72, "🔁 Substitution"],
//   [76, "⚽ GOAL"],
//   [80, "⚽ GOAL"],
//   [92, "🔶 Yellow card"],
// ]);

///// #1 MY SOLUTION
// let events = [];

// for (const [key, value] of gameEvents) {
//   events.push(value);
// }

// events = new Set([...events]);

// console.log(events);

///// #1 HIS SOLUTION
// const events2 = [...new Set(gameEvents.values())];
// console.log(events2);

///// #2 MY SOLUTION (his solution is same)
// gameEvents.delete(64);
// console.log(gameEvents);

///// #3 MY SOLUTIONS (will be different, depending on if part 2 is commented out or not)
// #3A
// const eventAveTime = 90 / gameEvents.size;
// console.log(`An event happened, on average, every ${eventAveTime} minutes.`);

// #3B MY SOLUTION
// console.log(
//   `An event happened, on average, every ${
//     [...gameEvents][gameEvents.size - 1][0] / gameEvents.size
//   } minutes`
// );

// #3C MY SOLUTION
// let highestMin = 0;

// for (let num of [...gameEvents.keys()]) {
//   highestMin = num > highestMin ? num : highestMin;
// }

// console.log(
//   `An event happened, on average, every ${highestMin / gameEvents.size} minutes`
// );

///// #3A HIS SOLUTION
// console.log(
//   `An event happened, on average, every ${90 / gameEvents.size} minutes`
// );

// #3B HIS SOLUTION
// const time = [...gameEvents.keys()].pop();

// console.log(
//   `An event happened, on average, every ${time / gameEvents.size} minutes`
// );

///// #4 MY SOLUTION
// for (const [key, value] of gameEvents) {
//   let half = key < 45 ? "FIRST" : "SECOND";
//   console.log(`[${half} HALF] ${key}: ${value}`);
// }

// #4 HIS SOLUTION
// for (const [min, event] of gameEvents) {
//   const half = min <= 45 ? "FIRST" : "SECOND";
//   console.log(`[${half} HALF] ${min}: ${event}`);
// }

// ---------------------------------------------------------------------------------------------
// SECTION 9 CHALLENGE 4
// ---------------------------------------------------------------------------------------------
// ///// MY SOLUTION

// document.body.append(document.createElement("textarea"));
// document.body.append(document.createElement("button"));

// let submitButton = document.querySelector("button");

// submitButton.addEventListener("click", function () {
//   let textboxInput = document.querySelector("textarea").value;

//   const separateItems = textboxInput.toLowerCase().split("\n");

//   for (let item of separateItems) {
//     let [firstWord, secondWord] = item.trim().split("_");
//     let camelCased = `${firstWord}${
//       secondWord[0].toUpperCase() + secondWord.slice(1)
//     }`;
//     let index = separateItems.indexOf(item);

//     console.log(camelCased.padEnd(25, " ") + "✅".repeat(index + 1));
//   }
// });

///// HIS SOLUTION
// document.body.append(document.createElement("textarea"));
// document.body.append(document.createElement("button"));

// document.querySelector("button").addEventListener("click", function () {
//   const text = document.querySelector("textarea").value;
//   const rows = text.split("\n");

//   for (const [i, row] of rows.entries()) {
//     const [first, second] = row.toLowerCase().trim().split("_");

//     const output = `${first}${second.replace(
//       second[0],
//       second[0].toUpperCase()
//     )}`;
//     console.log(`${output.padEnd(20)}${"✅".repeat(i + 1)}`);
//   }
// });

// ---------------------------------------------------------------------------------------------
// SECTION 10 CHALLENGE 1
// ---------------------------------------------------------------------------------------------
///// MY ATTEMPTS:

// function choose.bind(poll) {
//   let choice = prompt(`${this.question} (Write option number)`);

//   if (
//     // typeof choice !== "number" &&
//     choice !== 0 &&
//     choice !== 1 &&
//     choice !== 2 &&
//     choice !== 3
//   ) {
//     alert("Please try again");
//   } else {
//     this.answers[choice]++;
//   }
//   this.displayResults();
// }

// const poll = {
//   question: "What is your favourite programming language?",
//   options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
//   // His instructions: This generates [0, 0, 0, 0]. More in the next section! answers: new Array(4).fill(0),
//   answers: new Array(4).fill(0),
//   // answers: [0,0,0,0]; //same as above

//   // registerNewAnswer: 0;

//   // let choice = function () {
//   //   prompt(`${this.question} (Write option number)`);
//   // };

//   // choice.bind(registerNewAnswer);

//   // choice();

//   // console.log(choice, typeof choice);
//   // choice = Number(choice);
//   // console.log(choice, typeof choice);

//   displayResults: function () {
//     console.log(this.answers);
//   },
// };

// poll.registerNewAnswer();

// document.querySelector("ANSWER POLL BUTTON").addEventListener("click", poll.registerNewAnswer());

// registerNewAnswer: function () {
//   function choice() {
//     Number(prompt(`${this.question} (Write option number)`));
//   }

//   if (choice !== 0 && choice !== 1 && choice !== 2 && choice !== 3) {
//     alert("Please try again");
//     choice();
//   } else {
//     this.answers[choice]++;
//   }
// },

//   registerNewAnswer: function () {
//     let choice = function () {
//       prompt(`${this.question} (Write option number)`);
//     };
//     choice.bind(this.registerNewAnswer)();

//     // console.log(choice, typeof choice);
//     choice = Number(choice);
//     console.log(choice, typeof choice);

//     if (
//       typeof choice !== "number" &&
//       choice !== 0 &&
//       choice !== 1 &&
//       choice !== 2 &&
//       choice !== 3
//     ) {
//       alert("Please try again");
//       choice();
//     } else {
//       this.answers[choice]++;
//     }
//   },
// };

// const poll = {
//   question: "What is your favourite programming language?",
//   options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
//   // His instructions: This generates [0, 0, 0, 0]. More in the next section! answers: new Array(4).fill(0),
//   answers: new Array(4).fill(0),
//   // answers: [0,0,0,0]; //same as above

//   registerNewAnswer: function () {
//     let choice = Number(prompt(`${this.question} (Write option number)`));
//     if (
//       // typeof choice !== "number" &&
//       choice !== 0 &&
//       choice !== 1 &&
//       choice !== 2 &&
//       choice !== 3
//     ) {
//       alert("Please try again");
//     } else {
//       this.answers[choice]++;
//     }
//     this.displayResults();
//   },

//   displayResults: function () {
//     console.log(this.answers);
//   },
// };

// poll.registerNewAnswer();

///// HIS SOLUTION:

const poll = {
  question: "What is your favourite programming language?",
  options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    // Get the answer
    const answer = Number(
      prompt(
        `${this.question} \n ${this.options.join(
          "\n"
        )}\n(Write option number.))`
      )
    );

    // console.log(answer);

    // Register answer
    typeof answer === "number" &&
      answer < this.answers.length &&
      this.answers[answer]++;

    this.displayResults();
    this.displayResults("string");
  },

  displayResults(type = "array") {
    if (type === "array") {
      console.log(this.answers);
    } else if (type === "string") {
      console.log(`Poll results are ${this.answers.join(", ")}.`);
    }
  },
};

document
  .querySelector(".poll-btn")
  .addEventListener("click", poll.registerNewAnswer.bind(poll));

poll.displayResults.call({ answers: [5, 2, 3] }, "string");
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, "string");
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] });
