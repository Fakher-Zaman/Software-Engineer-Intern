// Variables are declared with 'var' keyword have a Global Scope.
// Variables are declared with 'let' keyword have a Block Scope.
// Variables are declared with 'const' keyword have also a Block Scope.

{
    var value = 10;
}
console.log("value = " + value);

{
    let value1 = 20;
    console.log(value1);
}
// console.log(value1);        // Not console the value of value1 variable outside the body

console.log("=> Redeclaring Variables:");

// Try var keyword: (Global Scope)
var x = 10;
// Here x is 10
{
    var x = 20;
    // Here x is 20;
}
console.log("x = " + x);        // Here x is 20;

// Try let keyword: (Block Scope)
let y = 10;
// Here y is 10
{
    let y = 20;
    // Here y is 20 
}
console.log("y = " + y);        // Here y is 10

console.log("=> Hoisting in JavaScript:");
// var keyword
car = "BMW";
var car;            // Execute the value because var is hoisted.
console.log(car);
// let keyword          // Give an error because let is not hoisted.
// bike = "United";
// console.log(bike);