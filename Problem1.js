// Task 1 of problem

const myMoney = 1000;
const oranges = 375 , apples = 325;
const totalCost = oranges + apples;
const moneyReturn = myMoney - totalCost;
console.log(moneyReturn);


// Task 2 of problem

const Mathematics = 75.25,  Biology = 65, Chemistry = 80, Physics = 35.45, Bangla = 99.50;

const allSubjectsTotalMarks = Mathematics + Biology + Chemistry + Physics + Bangla;

const averageMarks = (allSubjectsTotalMarks / 5).toFixed(2);
console.log(averageMarks);

//Task 3 of problem

const number = 119;
const remainder = number % 5;
console.log(remainder);


// Task 4 of problem


var x = 10;
var result1 = isNaN(x);  // false, because x is a number
console.log(result1); 

var y = 'Hello';
var result2 = isNaN(y);  // true, because 'Hello' cannot be converted to a number
console.log(result2);


var a = isNaN(2 - 10);
console.log(a);

var a = isNaN(2 - 10);
console.log(a);  // Output: false