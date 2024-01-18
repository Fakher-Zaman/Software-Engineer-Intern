// Implementation on Arrays
const cars = ["BMW", "Honda", "Audi", "Prado"];

let text = "";

for (let iterator of cars) {
    text += iterator + ", ";
}

console.log(text);

// Implementation on Strings
const language = "JavaScript";

let str = "";

for (let char of language) {
    str += char + " | ";
}

console.log((str));