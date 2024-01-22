// ==> A problem with this code which have 90% part of the every function repeated again and again.

// const radius = [3, 1, 2, 4];

// const calculateArea = function (radius) {
//     const output = [];
//     for (let i = 0; i < radius.length; i++) {
//         output.push(Math.PI * radius[i] * radius[i]);
//     }
//     return output;
// };

// console.log("->Area:\n" + calculateArea(radius));

// const calculateCircumference = function (radius) {
//     const output = [];
//     for (let i = 0; i < radius.length; i++) {
//         output.push(2 * Math.PI * radius[i]);
//     }
//     return output;
// };

// console.log("->Circumference:\n" + calculateCircumference(radius));

// const calculateDiameter = function (radius) {
//     const output = [];
//     for (let i = 0; i < radius.length; i++) {
//         output.push(2 * radius[i]);
//     }
//     return output;
// };

// console.log("->Diameter:\n" + calculateDiameter(radius));

// ==> To solve this problem i will use the DRY (Don't Repeat Yourself) Principle to solves it.
// Higher Order Function - Functional Programming

const radius = [3, 1, 2, 4];

const area = function (radius) {
    return Math.PI * radius * radius;
};

const circumference = function (radius) {
    return 2 * Math.PI * radius;
};

const diameter = function (radius) {
    return 2 * radius;
};

// Higher Order Function
const calculate = function (radius, logic) {
    const output = [];
    for (let i = 0; i < radius.length; i++) {
        output.push(logic(radius[i]));
    }
    return output;
};

console.log("Area:\n" + calculate(radius, area));
console.log("Circumference:\n" + calculate(radius, circumference));
console.log("Diameter:\n" + calculate(radius, diameter));