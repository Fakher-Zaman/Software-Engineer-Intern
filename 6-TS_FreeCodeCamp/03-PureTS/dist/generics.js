"use strict";
const score = [];
const names = [];
function identityOne(val) {
    return val;
}
function identityTwo(val) {
    return val;
}
// Generic function
// function identityThree<Type>(val: Type): Type {
//     return val;
// }
// Most programmers use T as a type parameter
function identityThree(val) {
    return val;
}
identityThree(11);
console.log(identityThree("Hello"));
console.log(identityThree({ brand: "Coca-Cola", type: 1 }));
