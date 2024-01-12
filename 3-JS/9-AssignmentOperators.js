console.log("\t\tAssignment Operators");

console.log("=> JavaScript Assignment Operators:");
let text = "Hello";
console.log(text += " World!");
let x = 1;
let y = 2;
console.log("x *= y" + (x *= y));

console.log("=> Shift Assignment Operators:");
let num = 100000;
console.log(x <<= 5);

console.log("=> Bitwise Assignment Operators:");
let value = 100;
console.log(value &= 5);
console.log(value |= 5);
console.log(value ^= 5);

console.log("=> Logical Assignment Operators:");
var number = 21;
console.log(number &&= 1);
console.log(number ||= 2);
console.log(number ??= 3);