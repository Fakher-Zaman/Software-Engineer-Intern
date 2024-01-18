"use strict";

// Use of this in objects
const person = {
    firstName: "Fakher",
    lastName: "Zaman",
    age: 23,
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
}

console.log(person.fullName());

let x = this;
console.log(typeof (x));