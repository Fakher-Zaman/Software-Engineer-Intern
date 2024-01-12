// let keyword
let x;
// let x = 20;      // Give an error because with const same variable is'nt declares twice at a time.
let y = 10;
x = 10;
y = 20;
console.log("x = " + x + ", " + "y = " + y);

// var keyword
var x1;
var x2;
x1 = 50;
var x2 = 200
console.log("x1 = " + x1 + ", " + "x2 = " + x2);

// const keyword
const var1 = 100;
const var2 = 200;
// const var2 = 300;        // Give an error because  with const same variable is'nt declares twice at a time.
// var1 = 300;      // Give an error because const keyword value is assigns only Once.
// var2 = 400;
const sum = var1 + var2;
console.log("Sum: " + sum);

// case # 1:
let value1 = "5" + 2 + 3;
console.log("value1 = " + value1);

let value2 = 5 + "2" + 3;
console.log("value2 = " + value2);

let value3 = 5 + 2 + "3";
console.log("value3 = " + value3);

// Variables With Dollar Sign
const $$$ = "Three Dollar Signs"
console.log("$$$ = " + $$$);

// Variables With Underscore (_)
let _hello = "World!";
console.log("Hello " + _hello);