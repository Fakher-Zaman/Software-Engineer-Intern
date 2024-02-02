"use strict";
// #1: type narrowing (detection)
function detectType(val) {
    if (typeof val === "string") {
        return val.toLocaleLowerCase();
    }
    return val + 4;
}
function provideId(id) {
    if (!id) {
        console.log("No ID provided");
        return;
    }
    id.toLowerCase();
}
function printAll(strs) {
    if (strs) {
        if (typeof strs === "object") {
            for (const str of strs) {
                console.log(str);
            }
        }
        else if (typeof strs === "string") {
            console.log(strs);
        }
    }
}
printAll(["one", "two", "three"]);
printAll("four");
printAll(null);
class Sellable {
    constructor() {
        this.cart = [];
    }
    addToCart(item) {
        this.cart.push(item);
    }
}
function isAdmin(account) {
    if ("isAdmin" in account) {
        return account.isAdmin;
    }
    else {
        return false;
    }
}
const output = isAdmin({
    name: "John",
    email: "john@gmail.com",
    isAdmin: true
});
console.log(output);
// #3: Instance typeof and Type Predicates:
function isNumber(x) {
    return typeof x === "number";
}
function isFish(pet) {
    return pet.swim !== undefined;
}
function getFood(pet) {
    if (isFish(pet)) {
        pet;
        return "Fish Food";
    }
    else {
        pet;
        return "Bird Food";
    }
}
function getTrueShape(shape) {
    switch (shape.kind) {
        case "circle":
            return Math.PI * shape.radius ** 2;
        case "square":
            return shape.side ** 2;
        case "rectangle":
            return shape.width * shape.height;
        default:
            const _exhaustiveCheck = shape;
            return _exhaustiveCheck;
    }
}
console.log(getTrueShape({ kind: "circle", radius: 10 }));
