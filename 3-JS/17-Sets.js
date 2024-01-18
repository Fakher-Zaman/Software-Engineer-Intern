const mySet1 = new Set([10, 10, 20, 30, 40]);
mySet1.add(50);
console.log(mySet1);

const mySet2 = new Set();
mySet2.add("Fakher");
mySet2.add("Zaman");
mySet2.add(23);
console.log(mySet2);

// forEach function used here
let txt = "";
mySet1.forEach(function (value) {
    txt += value + "\n";
});
console.log(txt);