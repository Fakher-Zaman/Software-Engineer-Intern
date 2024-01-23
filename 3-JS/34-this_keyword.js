"use strict";

// this in global space

console.log(this);  // globalObject - window, global

// this inside a function

function x() {
    // the value depends on strict / non-strict mode
    console.log(this);
}

// this inside non-strict mode - (this substitution)

// if the value of this keyword is undefined or null 
// this keyword will be replaced with globalObject
// only in non strict mode.

// this keyword value depends on how the this is called (window)
x();    // undefined in strict mode
window.x();     // window in strict mode

// this issue a object's method

const obj = {
    a: 10,
    x: function () {
        console.log(this);  // global
        console.log(this.a);    // value
    },
};

obj.x();

// call apply bind methods (sharing methods)

const internee1 = {
    name: "Fakher Zaman",
    printName: function () {
        console.log(this.name);
    },
};

internee1.printName();

const internee2 = {
    name: "Zeeshan Chadhar",
};

internee1.printName.call(internee2);    // value of his internee2

// this inside arrow function

// arrow function don't provide their own this binding (it returns the this value of the *enclosing lexical context*)
const obj1 = {
    a: 10,
    x: () => {
        console.log(this);
        console.log(this.a);
    },
};
obj1.x();

// this issues nested arrow function
const obj2 = {
    a: 20,
    x: function () {
        // enclosing lexical context
        const y = () => {
            console.log(this);
            console.log(this.a);
        }
        y();
    },
};
obj2.x();

// this inside DOM elements => reference to the HTMLelement

// this inside class, constructor