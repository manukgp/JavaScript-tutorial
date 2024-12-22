const id = 103

// another way to declare a number variable
const score = new Number(500.8964)
// console.log(score);         // it gives info about properties and methods of it

// console.log(score.toString().length);       //converted to str
// console.log(score.toFixed(2));      //values after decimel  500.89
// console.log(score.toPrecision(4));      // significant digits  500.9

const num = new Number(1000000)

// console.log(num.toLocaleString());      // 1,000,000
// console.log(num.toLocaleString('en-IN'));      // 10,00,000

/* MAX, MIN, SAFE_INTEGER: Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER,
Number.MAX_VALUE, Number.MIN_VALUE*/

// ++++++++++++++++++++++++++++++++++++++++ Maths +++++++++++++++++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));

console.log(Math.random());
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)
