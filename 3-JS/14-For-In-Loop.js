// for in loop
const person = {
    firstName: "Fakher",
    lastName: "Zaman",
    age: 23
};

var result = "";
for (const key in person) {
    result += person[key] + " ";
}

console.log(result);

// for each loop
const numbers = [45, 4, 9, 16, 25];

let txt = "";
numbers.forEach(myFunction);

function myFunction(value, index, array) {
    txt += value + ", ";
}

console.log(txt);
