"use strict";
function anotherFunction(valueOne, valueTwo, valueThree) {
    // do some database operations
    return {
        valueOne,
        valueTwo,
        valueThree
    };
}
const result = anotherFunction("10", "20", { connection: "localhost", username: "root", password: "root" });
console.log(result);
