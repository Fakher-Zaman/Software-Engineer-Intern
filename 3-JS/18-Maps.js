const fruits = new Map([
    ["apple", 500],
    ["banana", 600],
    ["orange", 700],
]);

console.log(fruits);

fruits.set("mango", 800);
console.log(fruits);

console.log(fruits.get("mango"));   // 800

console.log(fruits.has("Kiwi"));    // false

let text = "\n";
fruits.forEach(function (value, key) {
    text += key + ' = ' + value + "\n";
});
console.log(text);

let text1 = "";
for (const x of fruits.entries()) {
    text1 += x + "\n";
}
console.log(text1);